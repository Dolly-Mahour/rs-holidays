import UserDashboardShell from "@/src/components/UserDashboardSidebar";

export default function UserDashboardSubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserDashboardShell>{children}</UserDashboardShell>;
}
