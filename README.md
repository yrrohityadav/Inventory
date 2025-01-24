 
## **Inventory Management System**

An **Inventory Management System** built with React.js and Tailwind CSS for managing inventory efficiently. This project includes features like adding, editing, deleting items, filtering and sorting inventory, and highlighting low-stock items. It also features a user profile page and other static pages like Home, About, and Profile.

---

### **Features**
- **Add New Inventory Items**: Add items with name, category, quantity, and price.
- **Edit Existing Items**: Modify details of inventory items.
- **Delete Items**: Remove items from the inventory.
- **Filter by Category**: Filter inventory items based on their category.
- **Sort Items**: Sort inventory by name, category, quantity, or price.
- **Low-Stock Highlighting**: Highlight items with quantity < 10.
- **Responsive Design**: Fully responsive user interface built with Tailwind CSS.
- **Profile Page**: Displays user details, education, experience, projects, and skills.

---

### **Technologies Used**
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Express.js, MongoDB (for backend API - placeholder if applicable)
- **Authentication**: Firebase Authentication (used in the Blog App project demo)
- **APIs**: Gemini API, Hugging Face API (used in individual projects)

---

### **Installation and Setup**

Follow these steps to set up the project locally:

#### 1. Clone the Repository
```bash
git clone https://github.com/yrrohityadav/inventory-management-app.git
cd inventory-management-app
```

#### 2. Install Dependencies
Make sure you have **Node.js** and **npm** installed on your system. Then run:
```bash
npm install
```

#### 3. Run the Development Server
Start the development server with:
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

### **Folder Structure**
```plaintext
inventory-management-app/
├── public/               # Static assets (e.g., profile.jpg)
├── src/
│   ├── components/       # Reusable React components (Navbar, Footer, Modals, etc.)
│   ├── pages/            # Page components (HomePage, ProfilePage, AboutPage, InventoryPage)
│   ├── App.jsx           # Main application file
│   └── index.css         # Tailwind CSS file
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.js        # Vite configuration
```

---

//Screenshots
![image](https://github.com/user-attachments/assets/e94b61e2-38ee-4db8-b7f2-a63d1554e08e)
![image](https://github.com/user-attachments/assets/7dc02105-448c-40d9-88fb-0f057c067151)
![image](https://github.com/user-attachments/assets/8b2435b7-4a5b-46d7-ba85-b361fd113fe6)
![image](https://github.com/user-attachments/assets/6137cfdd-9e92-424d-8f34-be3f34e182bd)





### **How to Use**

#### Inventory Management
1. **View Inventory**:
   - Navigate to `/inventory` to view the list of items in the inventory.
2. **Add Items**:
   - Click on the "Add New Item" button to open a modal. Enter the item's name, category, quantity, and price to add it.
3. **Edit Items**:
   - Click on the "Edit" button in the table to open a modal and update item details.
4. **Delete Items**:
   - Click on the "Delete" button in the table to remove an item.
5. **Filter and Sort**:
   - Use the dropdown to filter items by category.
   - Click on column headers to sort items by name, quantity, price, or category.

#### Profile Page
- Navigate to `/profile` to view user details such as education, experience, projects, and skills.

#### Static Pages
- Access the `Home`, `Profile`, and `About` pages using the Navbar.

---

### **Key Scripts**
| Script          | Description                           |
|------------------|---------------------------------------|
| `npm install`    | Installs all the dependencies.       |
| `npm run dev`    | Starts the development server.       |
| `npm run build`  | Builds the app for production.       |
| `npm run preview`| Previews the production build.       |

---

### **Static Assets**
- Place static files (e.g., images, icons) in the `public/` folder. 
- To reference them, use the `/` path (e.g., `/profile.jpg`).

---

### **Demo**
To get an idea of how this project works, here are some example screenshots or demo links:
- **Home Page**: Main landing page of the app.
- **Inventory Page**: View, add, edit, and delete inventory items.
- **Profile Page**: Displays user details, education, experience, projects, and skills.

---

### **Requirements**
- **Node.js**: v14+ (Recommended: v18+)
- **npm**: v7+ (Comes with Node.js)
- **Vite**: Already integrated as a dev dependency in the project.

---

### **Contributing**
If you'd like to contribute to this project:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add a feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

### **Author**
**Rohit Yadav**  
- **Email**: [rohityadav22348@aitpune.edu.in](mailto:rohityadav22348@aitpune.edu.in)  
- **GitHub**: [@yrrohityadav](https://github.com/yrrohityadav)  
- **Mobile**: [+91 7903697273](tel:7903697273)

---

### **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

 
