# Space News Dashboard

A responsive website to browse, search, and filter space-related news articles, with features for dynamic navigation and article exploration.

---

## 🌟 Features

### 1. **Responsive Design**

- Fully adaptable layout for desktop and mobile users.
- Navigation toggles between desktop and mobile views with an interactive menu.

### 2. **Article Cards**

- Displays articles as visually appealing cards with:
  - Title
  - Date of publication
  - Source
  - Short summary
  - Associated image

### 3. **Search and Filter**

- **Search**: Real-time search functionality to filter articles by title.
- **Category Filters**: Browse articles by predefined topics like "SpaceX," "Mars," or "NASA."

### 4. **Navigation**

- Dynamic infinite scrolling or loading mechanism for seamless browsing.
- Smooth menu toggles for mobile users.

---

## 💻 Tech Stack

- **HTML**, **CSS**, **JavaScript**
- **LocalStorage** for caching fetched data
- **Spaceflight News API** for fetching real-time space news articles

---

## 📋 File Structure

### **HTML**

- Responsive header with navigation menus and search functionality.
- `main` section dynamically populated with article cards.

### **CSS**

- Responsive layout using media queries.
- Modern, clean design with a space-themed palette:
  - **Background**: Deep space blue (`#000c22`)
  - **Highlight**: Sky blue (`#038eff`)
  - **Cards**: White with shadow for depth.

### **JavaScript**

- Fetches articles from Spaceflight News API (`https://api.spaceflightnewsapi.net/v4/articles`).
- Handles search, category filtering, and dynamic DOM rendering.

---

## 🔧 How to Run

1. **Clone or Download the Project**
   ```bash
   git clone git@git.platform.alem.school:aideyato/js-crunch02.git
   ```
