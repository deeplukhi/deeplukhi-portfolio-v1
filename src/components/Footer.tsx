const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-foreground rounded-full" />
            <span className="mono-text text-sm">deepLukhi</span>
          </div>
          
          <p className="text-sm text-muted-foreground mono-text">
            © {new Date().getFullYear()} Deep Lukhi. Built with passion.
          </p>

          <div className="text-sm text-muted-foreground">
            <span className="mono-text">&lt;/&gt;</span> with ❤️
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
