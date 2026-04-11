import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Navbar scroll shadow
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;
    const handler = () => {
      navbar.style.boxShadow = window.scrollY > 10 ? "0 2px 20px rgba(0,0,0,0.08)" : "none";
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal-up, .reveal-right, .reveal-left");
    if (!revealEls.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = (entry.target as HTMLElement).style.animationDelay || "0s";
            const ms = parseFloat(delay) * 1000;
            setTimeout(() => entry.target.classList.add("visible"), ms);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <Navbar />
      <MobileMenu />
      <Outlet />
      <Footer />
      <div className="mobile-backdrop" id="mobileBackdrop" />
    </>
  );
};

export default Layout;
