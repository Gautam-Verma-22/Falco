import React from "react";

const MobileMenuSections = () => {
  const sections = [
    { id: "buy-drone", title: "Buy Drone", content: "Explore our range of high-performance drones for every application." },
    { id: "sell-drone", title: "Sell Your Drone", content: "Get the best value for your used drone with our trade-in program." },
    { id: "repair-booking", title: "Your Repair Booking", content: "Track and manage your drone repair appointments." },
    { id: "ongoing-booking", title: "Ongoing Booking", content: "View your current repair bookings and their status." },
    { id: "cancel-booking", title: "Cancel Booking", content: "Cancel or reschedule your repair appointments." },
    { id: "careers", title: "Careers", content: "Join our team of drone enthusiasts and robotics experts." },
    { id: "help", title: "Need Help", content: "Get support and assistance for all your drone-related questions." }
  ];

  return (
    <>
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className="mobile-menu-section"
          style={{
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem 2rem',
            background: 'var(--color-background)',
            margin: '2rem 0',
            borderRadius: '1rem',
            boxShadow: 'var(--shadow-3d)',
            border: '1px solid var(--color-glass-border)'
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '600px' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '1rem',
              color: 'var(--color-text)',
              fontFamily: 'Orbitron, sans-serif'
            }}>
              {section.title}
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              color: 'var(--color-text-secondary)',
              lineHeight: '1.6'
            }}>
              {section.content}
            </p>
            <button
              style={{
                marginTop: '2rem',
                padding: '1rem 2rem',
                background: 'var(--color-accent)',
                color: 'var(--color-secondary)',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Learn More
            </button>
          </div>
        </section>
      ))}
    </>
  );
};

export default MobileMenuSections; 