🧠 Project Overview
D&D Community Toolkit is a React-based application that helps players and Dungeon Masters streamline their sessions. The toolkit currently provides a Combat Tracker and a Spell Library with detailed spell information. The uses an API to retrieve D&D 5e spell data, and all state is managed using React hooks and the useReducer pattern where appropriate. This app was designed to integrate with the broader Dungeons Not Dating ecosystem.

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
/ Combat Combat Tracker tool that manages turn order and HP
/ Spell Library with Spell Details page for individual spells

⚙️ Technologies Used
React

React Router DOM

useState, useEffect, useReducer, Link

Open5e API or D&D 5e API

CSS or CSS Modules

LocalStorage (for saved spells and combatants)


🧩 Component Plan
Component Name
Header	
ComatTrackerBtn
SpellLibraryBtn
Homebtn
CombatantCard
NewCombatantForm
TurnOrderList
Contols
SpellCard
SearchBar	
Footer (coming soon)

🌐 API Plan
Primary Option: 5e Bits API https://5e-bits.github.io/docs/

No API key required

Data categories:

/api/spells


Example Flow:

Use useEffect to fetch from /api/spells

Store results in state with useState

Allow search/filter with input

Save selected spells to localStorage

Display saved spells only and filter by level toggles

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


🎨 Styling Plan
Brand with Dungeons Not Dating color scheme

Thematic fonts: parchment, scrolls, runes (Google Fonts or web-safe)


🚀 Future Features
User authentication and saved tips per profile

Integrated spellbook builder

"DM Tools" section with random encounter generators

"Helpful Hints" static section for new players

📝 Author
Rachel Dove
Founder of Dungeons Not Dating
This app was created as part of my SBA 320 React coursework.