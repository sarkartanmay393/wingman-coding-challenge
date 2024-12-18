export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 w-[60px] h-screen bg-[#115E56] flex flex-col items-center py-6 px-4 gap-[30px] z-50">
      {/* here goes the company logo */}
      {/* followed by three elements */}
      <div className="sidebar-item">Item 1</div>
      <div className="sidebar-item">Item 2</div>
      <div className="sidebar-item">Item 3</div>
    </aside>
  );
}
