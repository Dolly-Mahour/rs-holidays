'use client';
import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import world from "world-atlas/countries-110m.json";
import "../../src/styles/trips-map.css";

const STORAGE_KEY = "worldTravelCustomLocations_v1";

const defaultLocations = [
  {
    id: "default-eiffel",
    custom: false,
    country: "France",
    state: "Île-de-France",
    city: "Paris",
    name: "Eiffel Tower",
    lat: 48.8581,
    lon: 2.2947,
    type: "Iconic Landmark",
    environment: "Urban / Riverside",
    bestFor: "Architecture & Photography",
    about:
      "One of Paris's most recognized landmarks with panoramic city views and a famous evening skyline.",
    feel:
      "Elegant urban atmosphere with the Seine, boulevards, museums, gardens and cafés nearby.",
    highlights: [
      "Observation decks",
      "Seine walk",
      "City views",
      "Photography",
      "Night lights",
    ],
    photos: [],
  },
  {
    id: "default-taj",
    custom: false,
    country: "India",
    state: "Uttar Pradesh",
    city: "Agra",
    name: "Taj Mahal",
    lat: 27.1739,
    lon: 78.0421,
    type: "World Heritage Monument",
    environment: "Garden / Riverside",
    bestFor: "History & Architecture",
    about:
      "A celebrated white-marble monument known for its symmetry, craftsmanship and Mughal architecture.",
    feel:
      "Calm formal gardens, reflective water and the Yamuna River create a peaceful heritage environment.",
    highlights: [
      "Main mausoleum",
      "Marble details",
      "Reflecting pool",
      "Sunrise view",
      "Photography",
    ],
    photos: [],
  },
  {
    id: "default-fuji",
    custom: false,
    country: "Japan",
    state: "Yamanashi / Shizuoka",
    city: "Mount Fuji Area",
    name: "Mount Fuji",
    lat: 35.3606,
    lon: 138.7274,
    type: "Natural Landmark",
    environment: "Mountain / Lakes",
    bestFor: "Nature & Photography",
    about:
      "Japan's iconic mountain and one of the country's best-known scenic landmarks.",
    feel:
      "Mountain air, forests, lakes and seasonal views create a peaceful outdoor atmosphere.",
    highlights: [
      "Mountain views",
      "Lakes",
      "Trails",
      "Photography",
      "Seasonal scenery",
    ],
    photos: [],
  },
  {
    id: "default-burj",
    custom: false,
    country: "United Arab Emirates",
    state: "Dubai",
    city: "Dubai",
    name: "Burj Khalifa",
    lat: 25.1972,
    lon: 55.2744,
    type: "Modern Landmark",
    environment: "Urban / Desert Metropolis",
    bestFor: "Skyline & City Experience",
    about:
      "A defining Dubai landmark surrounded by contemporary architecture, shopping and entertainment.",
    feel:
      "Modern, high-energy and futuristic urban environment within a warm desert climate.",
    highlights: [
      "Observation deck",
      "Dubai skyline",
      "Downtown",
      "Night views",
      "Architecture",
    ],
    photos: [],
  },
  {
    id: "default-liberty",
    custom: false,
    country: "United States",
    state: "New York",
    city: "New York City",
    name: "Statue of Liberty",
    lat: 40.6892,
    lon: -74.0445,
    type: "National Landmark",
    environment: "Harbor / Urban",
    bestFor: "History & City Views",
    about:
      "A famous New York Harbor landmark combining history, ferry travel and skyline scenery.",
    feel:
      "Open harbor surroundings with busy metropolitan energy and views toward Manhattan.",
    highlights: [
      "Ferry ride",
      "Harbor views",
      "Manhattan skyline",
      "History",
      "Photography",
    ],
    photos: [],
  },
  {
    id: "default-machu",
    custom: false,
    country: "Peru",
    state: "Cusco",
    city: "Machu Picchu",
    name: "Machu Picchu",
    lat: -13.1631,
    lon: -72.545,
    type: "Mountain Heritage Site",
    environment: "Andes / Cloud Forest",
    bestFor: "Adventure & History",
    about:
      "An extraordinary Inca archaeological site surrounded by dramatic Andean mountain scenery.",
    feel:
      "Remote mountain atmosphere with green ridges, terraces, stone structures and changing clouds.",
    highlights: [
      "Inca ruins",
      "Mountain views",
      "Terraces",
      "Historic paths",
      "Photography",
    ],
    photos: [],
  },
];

const emptyForm = {
  country: "",
  state: "",
  city: "",
  name: "",
  lat: "",
  lon: "",
  type: "",
  environment: "",
  bestFor: "",
  about: "",
  feel: "",
  highlights: "",
  photo1: "",
  photo2: "",
  photo3: "",
};

const clean = (value) => String(value ?? "").trim();

const makeId = () =>
  `custom-${Date.now()}-${Math.random().toString(16).slice(2)}`;

function loadCustomLocations() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );

    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function TripsMap() {
  const svgRef = useRef(null);
  const mapLayerRef = useRef(null);
  const projectionRef = useRef(null);

  const [customLocations, setCustomLocations] =
    useState(loadCustomLocations);

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [placeId, setPlaceId] = useState("");

  const [selectedLocation, setSelectedLocation] = useState(null);

  const [mapStatus, setMapStatus] = useState(
    "Select Country, State or Place"
  );

  const [managerOpen, setManagerOpen] = useState(false);

  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState("");

  /*
   * ---------------------------------------------------------
   * ALL LOCATIONS
   * ---------------------------------------------------------
   */

  const allLocations = useMemo(() => {
    return [...defaultLocations, ...customLocations];
  }, [customLocations]);

  /*
   * ---------------------------------------------------------
   * COUNTRIES
   * ---------------------------------------------------------
   */

  const countries = useMemo(() => {
    return [
      ...new Set(
        allLocations
          .map((location) => location.country)
          .filter(Boolean)
      ),
    ].sort((a, b) => a.localeCompare(b));
  }, [allLocations]);

  /*
   * ---------------------------------------------------------
   * STATES
   * ---------------------------------------------------------
   */

  const states = useMemo(() => {
    return [
      ...new Set(
        allLocations
          .filter(
            (location) =>
              !country || location.country === country
          )
          .map((location) => location.state)
          .filter(Boolean)
      ),
    ].sort((a, b) => a.localeCompare(b));
  }, [allLocations, country]);

  /*
   * ---------------------------------------------------------
   * PLACES
   * ---------------------------------------------------------
   */

  const places = useMemo(() => {
    return allLocations
      .filter(
        (location) =>
          (!country || location.country === country) &&
          (!state || location.state === state)
      )
      .sort((a, b) =>
        a.name.localeCompare(b.name)
      );
  }, [allLocations, country, state]);

  /*
   * ---------------------------------------------------------
   * SAVE LOCAL STORAGE
   * ---------------------------------------------------------
   */

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(customLocations)
    );
  }, [customLocations]);

  /*
   * ---------------------------------------------------------
   * BUILD D3 MAP
   * ---------------------------------------------------------
   */

  useEffect(() => {
    if (!svgRef.current) return;

    try {
      const countriesData = feature(
        world,
        world.objects.countries
      );

      const svg = d3.select(svgRef.current);

      svg.selectAll("*").remove();

      const projection = d3
        .geoNaturalEarth1()
        .fitExtent(
          [
            [18, 18],
            [982, 522],
          ],
          countriesData
        );

      projectionRef.current = projection;

      const path = d3.geoPath(projection);

      /*
       * Globe
       */

      svg
        .append("path")
        .datum({
          type: "Sphere",
        })
        .attr("class", "sphere")
        .attr("d", path);

      /*
       * Map layer
       */

      const mapLayer = svg.append("g");

      mapLayerRef.current = mapLayer;

      /*
       * Countries
       */

      mapLayer
        .append("g")
        .selectAll("path")
        .data(countriesData.features)
        .join("path")
        .attr("class", "country")
        .attr("d", path);

      /*
       * Pins
       */

      const pinLayer = mapLayer.append("g");

      allLocations.forEach((location) => {
        const point = projection([
          Number(location.lon),
          Number(location.lat),
        ]);

        if (!point) return;

        const visible =
          (!country || location.country === country) &&
          (!state || location.state === state);

        const pin = pinLayer
          .append("g")
          .attr(
            "class",
            `pin ${selectedLocation?.id === location.id
              ? "active"
              : ""
            }`
          )
          .attr("data-id", location.id)
          .attr(
            "transform",
            `translate(${point[0]},${point[1]})`
          )
          .style(
            "display",
            visible ? null : "none"
          )
          .style("cursor", "pointer");

        pin
          .append("circle")
          .attr("class", "pin-ring")
          .attr("r", 7);

        pin
          .append("circle")
          .attr("class", "pin-core")
          .attr("r", 5);

        pin
          .append("text")
          .attr("class", "pin-label")
          .attr("x", 9)
          .attr("y", 4)
          .text(location.name);

        pin.on("click", () => {
          selectLocation(location);
        });
      });
    } catch (error) {
      console.error(error);
      setMapStatus(
        "Map could not be loaded. Dropdowns still work."
      );
    }
  }, [
    allLocations,
    country,
    state,
    selectedLocation,
  ]);

  /*
   * ---------------------------------------------------------
   * SELECT LOCATION
   * ---------------------------------------------------------
   */

  const selectLocation = (location) => {
    setCountry(location.country);
    setState(location.state);
    setPlaceId(location.id);
    setSelectedLocation(location);

    setMapStatus(
      `📍 ${location.name}, ${location.state}, ${location.country}`
    );

    zoomToLocation(location);
  };

  /*
   * ---------------------------------------------------------
   * ZOOM
   * ---------------------------------------------------------
   */

  const zoomToLocation = (location) => {
    const projection = projectionRef.current;
    const mapLayer = mapLayerRef.current;

    if (!projection || !mapLayer) return;

    const point = projection([
      Number(location.lon),
      Number(location.lat),
    ]);

    if (!point) return;

    const scale = 4.7;

    const tx =
      500 - scale * point[0];

    const ty =
      270 - scale * point[1];

    mapLayer
      .transition()
      .duration(1100)
      .ease(d3.easeCubicInOut)
      .attr(
        "transform",
        `translate(${tx},${ty}) scale(${scale})`
      );
  };

  /*
   * ---------------------------------------------------------
   * RESET MAP
   * ---------------------------------------------------------
   */

  const resetWorld = () => {
    if (mapLayerRef.current) {
      mapLayerRef.current
        .transition()
        .duration(900)
        .attr(
          "transform",
          "translate(0,0) scale(1)"
        );
    }

    setSelectedLocation(null);
    setPlaceId("");
    setMapStatus(
      "Select Country, State or Place"
    );
  };

  /*
   * ---------------------------------------------------------
   * COUNTRY CHANGE
   * ---------------------------------------------------------
   */

  const handleCountryChange = (value) => {
    setCountry(value);
    setState("");
    setPlaceId("");
    setSelectedLocation(null);

    if (value) {
      setMapStatus(
        `Country selected: ${value}. Now select a state or place.`
      );
    } else {
      resetWorld();
    }
  };

  /*
   * ---------------------------------------------------------
   * STATE CHANGE
   * ---------------------------------------------------------
   */

  const handleStateChange = (value) => {
    setState(value);
    setPlaceId("");
    setSelectedLocation(null);

    if (value) {
      setMapStatus(
        `Region selected: ${value}. Now select a place.`
      );
    }
  };

  /*
   * ---------------------------------------------------------
   * FORM
   * ---------------------------------------------------------
   */

  const handleFormChange = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  /*
   * ---------------------------------------------------------
   * CLEAR FORM
   * ---------------------------------------------------------
   */

  const clearForm = () => {
    setForm(emptyForm);
    setEditId("");
  };

  /*
   * ---------------------------------------------------------
   * SAVE / UPDATE LOCATION
   * ---------------------------------------------------------
   */

  const handleSubmit = (event) => {
    event.preventDefault();

    const location = {
      id: editId || makeId(),
      custom: true,

      country: clean(form.country),
      state: clean(form.state),
      city: clean(form.city),

      name: clean(form.name),

      lat: Number(form.lat),
      lon: Number(form.lon),

      type: clean(form.type),
      environment: clean(form.environment),
      bestFor: clean(form.bestFor),

      about: clean(form.about),
      feel: clean(form.feel),

      highlights: clean(form.highlights)
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),

      photos: [
        clean(form.photo1),
        clean(form.photo2),
        clean(form.photo3),
      ].filter(Boolean),
    };

    /*
     * Validation
     */

    if (
      !location.country ||
      !location.state ||
      !location.name ||
      Number.isNaN(location.lat) ||
      Number.isNaN(location.lon)
    ) {
      alert(
        "Please fill Country, State/Region, Place Name, Latitude and Longitude."
      );
      return;
    }

    if (
      location.lat < -90 ||
      location.lat > 90
    ) {
      alert(
        "Latitude must be between -90 and 90."
      );
      return;
    }

    if (
      location.lon < -180 ||
      location.lon > 180
    ) {
      alert(
        "Longitude must be between -180 and 180."
      );
      return;
    }

    /*
     * UPDATE
     */

    if (editId) {
      setCustomLocations((previous) =>
        previous.map((item) =>
          item.id === editId
            ? location
            : item
        )
      );
    }

    /*
     * ADD
     */

    else {
      setCustomLocations((previous) => [
        ...previous,
        location,
      ]);
    }

    clearForm();

    setManagerOpen(false);

    selectLocation(location);
  };

  /*
   * ---------------------------------------------------------
   * EDIT LOCATION
   * ---------------------------------------------------------
   */

  const editLocation = (location) => {
    setEditId(location.id);

    setForm({
      country: location.country || "",
      state: location.state || "",
      city: location.city || "",
      name: location.name || "",
      lat: location.lat ?? "",
      lon: location.lon ?? "",
      type: location.type || "",
      environment:
        location.environment || "",
      bestFor: location.bestFor || "",
      about: location.about || "",
      feel: location.feel || "",
      highlights:
        location.highlights?.join(", ") || "",

      photo1:
        location.photos?.[0] || "",

      photo2:
        location.photos?.[1] || "",

      photo3:
        location.photos?.[2] || "",
    });

    setManagerOpen(true);
  };

  /*
   * ---------------------------------------------------------
   * DELETE LOCATION
   * ---------------------------------------------------------
   */

  const deleteLocation = (id) => {
    const location =
      customLocations.find(
        (item) => item.id === id
      );

    if (!location) return;

    const confirmed = window.confirm(
      `Delete "${location.name}"?`
    );

    if (!confirmed) return;

    setCustomLocations((previous) =>
      previous.filter(
        (item) => item.id !== id
      )
    );

    resetWorld();
  };

  /*
   * ---------------------------------------------------------
   * EXPORT
   * ---------------------------------------------------------
   */

  const exportLocations = () => {
    const blob = new Blob(
      [
        JSON.stringify(
          customLocations,
          null,
          2
        ),
      ],
      {
        type: "application/json",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const anchor =
      document.createElement("a");

    anchor.href = url;

    anchor.download =
      "world-travel-custom-locations.json";

    anchor.click();

    URL.revokeObjectURL(url);
  };

  /*
   * ---------------------------------------------------------
   * IMPORT
   * ---------------------------------------------------------
   */

  const importLocations = (event) => {
    const file =
      event.target.files?.[0];

    if (!file) return;

    const reader =
      new FileReader();

    reader.onload = () => {
      try {
        const incoming =
          JSON.parse(reader.result);

        if (!Array.isArray(incoming)) {
          throw new Error(
            "JSON must contain an array."
          );
        }

        const validLocations =
          incoming
            .filter(
              (item) =>
                item.country &&
                item.state &&
                item.name &&
                Number.isFinite(
                  Number(item.lat)
                ) &&
                Number.isFinite(
                  Number(item.lon)
                )
            )
            .map((item) => ({
              ...item,

              id: makeId(),

              custom: true,

              lat: Number(item.lat),

              lon: Number(item.lon),

              highlights:
                Array.isArray(
                  item.highlights
                )
                  ? item.highlights
                  : [],

              photos:
                Array.isArray(
                  item.photos
                )
                  ? item.photos
                  : [],
            }));

        setCustomLocations(
          (previous) => [
            ...previous,
            ...validLocations,
          ]
        );

        alert(
          "Locations imported successfully."
        );
      } catch (error) {
        console.error(error);

        alert(
          "Could not import this JSON file."
        );
      }

      event.target.value = "";
    };

    reader.readAsText(file);
  };

  /*
   * ---------------------------------------------------------
   * RENDER
   * ---------------------------------------------------------
   */

  return (
    <>
      <div className="container-fluid g-0 my-5 px-5">

        {/* TOP BAR */}

        <div className="topbar">

          <div>
            <h1 className="fw-bold">
              OUR TRIPS MAP
            </h1>

            {/* <p>
              Country → State/Region →
              Famous Place → Zoom →
              Photos → Environment &
              travel information
            </p> */}
          </div>

          <div className="actions">

            <button
              className="btn"
              onClick={resetWorld}
            >
              Back to World
            </button>

            <button
              className="btn primary"
              onClick={() =>
                setManagerOpen(
                  (previous) => !previous
                )
              }
            >
              ＋ Add / Manage Locations
            </button>

          </div>

        </div>

        {/* FILTERS */}

        <section className="panel">

          <div className="filters">

            <div>
              <label>
                Country
              </label>

              <select
                value={country}
                onChange={(event) =>
                  handleCountryChange(
                    event.target.value
                  )
                }
              >
                <option value="">
                  All Countries
                </option>

                {countries.map(
                  (item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  )
                )}
              </select>
            </div>

            <div>
              <label>
                State / Region
              </label>

              <select
                value={state}
                onChange={(event) =>
                  handleStateChange(
                    event.target.value
                  )
                }
              >
                <option value="">
                  All States / Regions
                </option>

                {states.map(
                  (item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  )
                )}
              </select>
            </div>

            <div>
              <label>
                Place / Landmark
              </label>

              <select
                value={placeId}
                onChange={(event) => {
                  const location =
                    allLocations.find(
                      (item) =>
                        item.id ===
                        event.target.value
                    );

                  if (location) {
                    selectLocation(
                      location
                    );
                  }
                }}
              >
                <option value="">
                  Choose a Place
                </option>

                {places.map(
                  (location) => (
                    <option
                      key={location.id}
                      value={location.id}
                    >
                      {location.name}
                      {location.city
                        ? ` — ${location.city}`
                        : ""}
                    </option>
                  )
                )}
              </select>
            </div>

          </div>

        </section>

        {/* MAP */}

        <section className="map-wrap">

          <svg
            ref={svgRef}
            id="worldMap"
            viewBox="0 0 1000 540"
            role="img"
            aria-label="Interactive world travel map"
          />

          <div className="map-status">
            {mapStatus}
          </div>

        </section>

        {/* DETAIL PANEL */}

        {selectedLocation && (
          <section className="panel detail">

            <div>

              <h2>
                {selectedLocation.name}
              </h2>

              <div className="location-line">
                📍{" "}
                {[
                  selectedLocation.city,
                  selectedLocation.state,
                  selectedLocation.country,
                ]
                  .filter(Boolean)
                  .join(", ")}
              </div>

              <div className="chips">

                <span className="chip">
                  🏛️{" "}
                  {selectedLocation.type ||
                    "Destination"}
                </span>

                <span className="chip">
                  🌿{" "}
                  {selectedLocation.environment ||
                    "Environment not added"}
                </span>

                <span className="chip">
                  ✨{" "}
                  {selectedLocation.bestFor ||
                    "General travel"}
                </span>

              </div>

              <h3>
                About this place
              </h3>

              <p className="description">
                {selectedLocation.about ||
                  "No description has been added yet."}
              </p>

              <h3>
                Environment & atmosphere
              </h3>

              <p className="description">
                {selectedLocation.feel ||
                  "No environment description has been added yet."}
              </p>

              <h3>
                Things to experience
              </h3>

              <div className="highlights">

                {selectedLocation.highlights
                  ?.length ? (
                  selectedLocation.highlights.map(
                    (item) => (
                      <div
                        className="highlight"
                        key={item}
                      >
                        ✓ {item}
                      </div>
                    )
                  )
                ) : (
                  <div className="highlight">
                    No highlights added yet.
                  </div>
                )}

              </div>

            </div>

            <div>

              <h3>
                Photos
              </h3>

              <div className="gallery">

                {selectedLocation.photos
                  ?.length ? (
                  selectedLocation.photos.map(
                    (url) => (
                      <div
                        className="photo"
                        key={url}
                      >
                        <img
                          src={url}
                          alt={
                            selectedLocation.name
                          }
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.parentElement.innerHTML =
                              "Photo could not be loaded";
                          }}
                        />
                      </div>
                    )
                  )
                ) : (
                  <div className="photo">
                    📷
                  </div>
                )}

              </div>

            </div>

          </section>
        )}

        {/* MANAGER */}

        {managerOpen && (
          <section className="panel manager">

            <div className="section-title">

              <div>
                <h2>
                  ＋ Add New Country /
                  State / Place
                </h2>
              </div>

              <button
                className="btn"
                onClick={() =>
                  setManagerOpen(false)
                }
              >
                Close
              </button>

            </div>

            <p className="help">
              Enter a new country,
              state/region and place. If
              the country or state does
              not already exist, it will
              be added automatically to
              the dropdowns.
            </p>

            <form
              onSubmit={handleSubmit}
            >

              <div className="form-grid">

                <div>
                  <label>
                    Country *
                  </label>

                  <input
                    required
                    value={form.country}
                    onChange={(event) =>
                      handleFormChange(
                        "country",
                        event.target.value
                      )
                    }
                    placeholder="Example: India"
                  />
                </div>

                <div>
                  <label>
                    State / Region *
                  </label>

                  <input
                    required
                    value={form.state}
                    onChange={(event) =>
                      handleFormChange(
                        "state",
                        event.target.value
                      )
                    }
                    placeholder="Example: Rajasthan"
                  />
                </div>

                <div>
                  <label>
                    City / Area
                  </label>

                  <input
                    value={form.city}
                    onChange={(event) =>
                      handleFormChange(
                        "city",
                        event.target.value
                      )
                    }
                    placeholder="Example: Jaipur"
                  />
                </div>

                <div>
                  <label>
                    Place / Landmark Name *
                  </label>

                  <input
                    required
                    value={form.name}
                    onChange={(event) =>
                      handleFormChange(
                        "name",
                        event.target.value
                      )
                    }
                    placeholder="Example: Hawa Mahal"
                  />
                </div>

                <div>
                  <label>
                    Latitude *
                  </label>

                  <input
                    required
                    type="number"
                    step="any"
                    value={form.lat}
                    onChange={(event) =>
                      handleFormChange(
                        "lat",
                        event.target.value
                      )
                    }
                    placeholder="26.9239"
                  />
                </div>

                <div>
                  <label>
                    Longitude *
                  </label>

                  <input
                    required
                    type="number"
                    step="any"
                    value={form.lon}
                    onChange={(event) =>
                      handleFormChange(
                        "lon",
                        event.target.value
                      )
                    }
                    placeholder="75.8267"
                  />
                </div>

                <div>
                  <label>
                    Place Type
                  </label>

                  <input
                    value={form.type}
                    onChange={(event) =>
                      handleFormChange(
                        "type",
                        event.target.value
                      )
                    }
                    placeholder="Heritage / Nature / Temple"
                  />
                </div>

                <div>
                  <label>
                    Environment
                  </label>

                  <input
                    value={form.environment}
                    onChange={(event) =>
                      handleFormChange(
                        "environment",
                        event.target.value
                      )
                    }
                    placeholder="Desert / Mountain / Beach"
                  />
                </div>

                <div>
                  <label>
                    Best For
                  </label>

                  <input
                    value={form.bestFor}
                    onChange={(event) =>
                      handleFormChange(
                        "bestFor",
                        event.target.value
                      )
                    }
                    placeholder="History / Adventure"
                  />
                </div>

                <div className="span-3">

                  <label>
                    About the Place
                  </label>

                  <textarea
                    rows="3"
                    value={form.about}
                    onChange={(event) =>
                      handleFormChange(
                        "about",
                        event.target.value
                      )
                    }
                  />

                </div>

                <div className="span-3">

                  <label>
                    Environment &
                    Atmosphere Description
                  </label>

                  <textarea
                    rows="3"
                    value={form.feel}
                    onChange={(event) =>
                      handleFormChange(
                        "feel",
                        event.target.value
                      )
                    }
                  />

                </div>

                <div className="span-3">

                  <label>
                    Highlights
                  </label>

                  <input
                    value={form.highlights}
                    onChange={(event) =>
                      handleFormChange(
                        "highlights",
                        event.target.value
                      )
                    }
                    placeholder="Sunrise, Local food, Architecture"
                  />

                </div>

                <div>

                  <label>
                    Photo URL 1
                  </label>

                  <input
                    value={form.photo1}
                    onChange={(event) =>
                      handleFormChange(
                        "photo1",
                        event.target.value
                      )
                    }
                  />

                </div>

                <div>

                  <label>
                    Photo URL 2
                  </label>

                  <input
                    value={form.photo2}
                    onChange={(event) =>
                      handleFormChange(
                        "photo2",
                        event.target.value
                      )
                    }
                  />

                </div>

                <div>

                  <label>
                    Photo URL 3
                  </label>

                  <input
                    value={form.photo3}
                    onChange={(event) =>
                      handleFormChange(
                        "photo3",
                        event.target.value
                      )
                    }
                  />

                </div>

                <div
                  className="span-3"
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >

                  <button
                    type="submit"
                    className="btn primary"
                  >
                    {editId
                      ? "Update Location"
                      : "Save Location"}
                  </button>

                  <button
                    type="button"
                    className="btn"
                    onClick={clearForm}
                  >
                    Clear Form
                  </button>

                  <button
                    type="button"
                    className="btn"
                    onClick={exportLocations}
                  >
                    Export Custom Locations
                  </button>

                  <label className="btn">
                    Import JSON

                    <input
                      type="file"
                      accept=".json,application/json"
                      hidden
                      onChange={
                        importLocations
                      }
                    />
                  </label>

                </div>

              </div>

            </form>

            <hr
              style={{
                border: 0,
                borderTop:
                  "1px solid #27425e",
                margin: "20px 0",
              }}
            />

            <div className="section-title">

              <h2>
                Saved Custom Locations
              </h2>

              <button
                className="btn danger"
                onClick={() => {
                  if (
                    !customLocations.length
                  )
                    return;

                  if (
                    window.confirm(
                      "Delete ALL custom locations?"
                    )
                  ) {
                    setCustomLocations(
                      []
                    );

                    clearForm();

                    resetWorld();
                  }
                }}
              >
                Delete All Custom
              </button>

            </div>

            <div className="location-table-wrap">

              <table>

                <thead>

                  <tr>
                    <th>Country</th>
                    <th>State / Region</th>
                    <th>Place</th>
                    <th>Coordinates</th>
                    <th>Actions</th>
                  </tr>

                </thead>

                <tbody>

                  {customLocations.length ===
                    0 ? (
                    <tr>
                      <td
                        colSpan="5"
                        className="empty"
                      >
                        No custom locations
                        added yet.
                      </td>
                    </tr>
                  ) : (
                    customLocations
                      .slice()
                      .sort(
                        (a, b) =>
                          a.country.localeCompare(
                            b.country
                          ) ||
                          a.state.localeCompare(
                            b.state
                          ) ||
                          a.name.localeCompare(
                            b.name
                          )
                      )
                      .map((location) => (
                        <tr
                          key={location.id}
                        >

                          <td>
                            {location.country}
                          </td>

                          <td>
                            {location.state}
                          </td>

                          <td>
                            <strong>
                              {location.name}
                            </strong>

                            <div>
                              {location.city}
                            </div>
                          </td>

                          <td>
                            {location.lat},{" "}
                            {location.lon}
                          </td>

                          <td>

                            <button
                              className="small-btn"
                              onClick={() =>
                                selectLocation(
                                  location
                                )
                              }
                            >
                              View
                            </button>

                            <button
                              className="small-btn"
                              onClick={() =>
                                editLocation(
                                  location
                                )
                              }
                            >
                              Edit
                            </button>

                            <button
                              className="small-btn delete-btn"
                              onClick={() =>
                                deleteLocation(
                                  location.id
                                )
                              }
                            >
                              Delete
                            </button>

                          </td>

                        </tr>
                      ))
                  )}

                </tbody>

              </table>

            </div>

          </section>
        )}

      </div>
    </>
  );
}

export default TripsMap;