import React from "react";
import { FiChevronRight, FiSearch, FiArrowLeft } from "react-icons/fi";

const Data = {
  A: ["Anxiety", "Attachment Theory", "Aggression", "Affect", "Autonomy"],
  B: ["Burnout", "Behavior Therapy", "Bias", "Cognitive Behavioral Therapy (CBT)"],
  C: ["Compassion Fatigue"],
  D: ["Depression", "Decision Making", "Dissociation"],
  E: ["Empathy", "Emotional Regulation", "Ego"],
  F: ["Empathy", "Emotional Regulation", "Ego"],
};

const HeroSection = () => {
  return (
    <div style={styles.container}>
      

      <div style={styles.alphabetNav}>
        {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((letter) => (
          <span key={letter} style={styles.letter}>
            {letter}
          </span>
        ))}
      </div>

      <div style={styles.Content}>
        {Object.keys(Data).map((letter) => (
          <div key={letter} style={styles.column}>
            <div style={styles.sectionHeader}>{letter}</div>
            {Data[letter].map((item) => (
              <div key={item} style={styles.listItem}>
                <span>{item}</span>
                <FiChevronRight style={styles.arrow} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "90%",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
    maxWidth: "1100px", 
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "20px",
  },
  backIcon: {
    fontSize: "22px",
    cursor: "pointer",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: "10px",
    borderRadius: "8px",
    marginTop: "15px",
  },
  searchIcon: {
    fontSize: "18px",
    marginRight: "10px",
    color: "#999",
  },
  searchInput: {
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: "14px",
    flex: 1,
  },
  alphabetNav: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    border: "1ps solid red",
    marginTop: "20px",
    marginBottom: "20px",
    fontSize: "14px",
    color: "#999",
  },
  letter: {
    cursor: "pointer",
    fontWeight: "500",
    transition: "color 0.3s",
  },
  Content: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "40px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  sectionHeader: {
    backgroundColor: "#F3EBFF",
    padding: "10px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#814DDA",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    borderBottom: "1px solid #ddd",
    fontSize: "14px",
    cursor: "pointer",
    transition: "background 0.2s",
  },
  arrow: {
    color: "#999",
  },


  "@media (max-width: 768px)": {
    container: {
      width: "95%",
      maxWidth: "100%",
      margin: "auto",
    },
    glossaryContent: {
      display: "flex",
      flexDirection: "column", 
    },
    alphabetNav: {
      fontSize: "12px",
      gap: "2px",
    },
    listItem: {
      padding: "12px",
    },
  },
};

export default HeroSection;
