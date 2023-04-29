export const Footer = () => {
  return (
    <footer className="bg-slate-800 text-gray-100 text-center">
      <div className="py-16">
        <p>Amae</p>

        <p> &copy; {new Date().getFullYear()} Amae.</p>

        <small className="block pt-10"> Hecho con 💙 </small>
      </div>
    </footer>
  );
};
