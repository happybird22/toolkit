🧠 Project Overview
D&D Community Toolkit is a React-based application that helps players and Dungeon Masters quickly find and save useful Dungeons & Dragons 5e resources. This includes spells, class information, and core rules via a 3rd-party API. The goal is to provide an easy-to-use tool that can eventually be integrated into the “Helpful Hints” section of the Dungeons Not Dating capstone project.

✅ Assignment Requirements Checklist
Requirement	Completed
React Application	✅
useState / useReducer	✅
useEffect	✅
React Router - 3 Pages	✅
3rd Party API Integration	✅ (D&D 5e API or Open5e)
Well-documented README	✅
CSS Styling	✅
12–15 Git Commits	✅
Final Presentation Ready	✅

📁 Application Structure & Pages
Route Path	Page Name	Description
/	Home	Intro to the Toolkit, call-to-action
/browse	Browse Tips	Search and filter API-based data (e.g., spells or rules)
/favorites	Saved Tips	View and manage user-saved helpful hints

⚙️ Technologies Used
React (Vite or Create React App)

React Router DOM

useState, useEffect

Open5e API or D&D 5e API

CSS or CSS Modules

LocalStorage (for saved hints)

useReducer (for managing saved state)

🧩 Component Plan
Component Name	Description
App	-Root component and router manager
Navbar	-Top navigation
Home	-Welcome message and page intro
BrowseTips	-Fetches and displays API data
SearchBar	-Handles search/filter for tips
TipCard	-Displays a single tip/resource
Favorites	-Lists user-saved tips
Footer	-Themed footer with D&D branding

🌐 API Plan
Primary Option: D&D 5e API (https://www.dnd5eapi.co/)

No API key required

Data categories:

/api/spells

/api/classes

/api/rules

Example Flow:

Use useEffect to fetch from /api/spells

Store results in state with useState

Allow search/filter with input and dropdown

Save selected tips to localStorage

Display saved tips on /favorites page

🪜 Development Steps
Phase 1: Setup
 Initialize React project

 Install react-router-dom

 Scaffold pages and routes

Phase 2: Wireframing

Phase 3: API Integration
 Use useEffect to fetch spells or class data

 Render basic results with map()

 Add loading and error handling

Phase 4: State Management
 Store API response in useState

 Save favorite tips to state + localStorage

 Optionally use useReducer for favorites

Phase 5: Styling
 Add D&D fantasy-themed CSS

 Use custom fonts, borders, or icons

 Make layout responsive

Phase 6: Extra Credit (Optional)
 Add collapsible or modal tip views

 Add tooltips or quick reference guide

 Add sorting by class, level, etc.

💾 Saving & Loading Favorites
Use localStorage to persist user selections:

js
Copy
Edit
useEffect(() => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}, [favorites]);
🧪 Testing
 Manual testing of API load and render

 Add sample tip cards and check edge cases (no results, duplicate saves)

 Ensure responsiveness and mobile layout

🎨 Styling Plan
Brand with Dungeons Not Dating color scheme

Thematic fonts: parchment, scrolls, runes (Google Fonts or web-safe)

Fantasy accents: borders, hover glows, minimal animations

Use CSS transitions for smooth state changes

🚀 Future Features
User authentication and saved tips per profile

Integrated spellbook builder

"DM Tools" section with random encounter generators

Export favorites to PDF or share via email

📝 Author
Rachel Dove
Founder of Dungeons Not Dating
This app was created as part of my SBA 320 React coursework.