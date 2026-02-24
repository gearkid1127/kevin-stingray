

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
  <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
    <div className="font-semibold">Logo</div>
    <div className="flex items-center gap-4 text-sm text-gray-600">
      <a className="hover:text-black" href="#">Spotify</a>
      <a className="hover:text-black" href="#">Apple Music</a>
      <a className="hover:text-black" href="#">Instagram</a>
      <a className="hover:text-black" href="#">YouTube</a>
    </div>
  </div>
</nav>
  )
}
