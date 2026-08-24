# 🔤 EncodeX

> A lightweight, fast, and browser-based encoding & decoding toolkit for everyday text transformation.

EncodeX is a modern client-side utility that provides a simple interface for encoding and decoding text using popular encoding formats such as **Base64, URL Encoding, Hexadecimal, and Binary**.

No backend.
No database.
No installation.

Just open EncodeX, enter your text, choose an encoding method, and transform it instantly.

---

## ✨ Features

* 🔐 **Base64 Encoding & Decoding**
* 🌐 **URL Encoding & Decoding**
* 🔢 **Hexadecimal Encoding & Decoding**
* 💻 **Binary Encoding & Decoding**
* ⚡ Instant client-side processing
* 📋 One-click copy to clipboard
* 🔄 Swap input and output
* 🗑️ Clear input and output instantly
* 🔢 Live character counters
* ⌨️ Keyboard shortcuts
* 🌍 Unicode-friendly text processing
* 📱 Responsive design
* 🌙 Modern dark-themed interface
* 🔒 No data uploaded to a server

---

## 🖼️ Screenshot



```text
docs/
└── screenshot.png
```

Example:

![EncodeX Screenshot](docs/screenshot.png)

---

## 🚀 Live Demo

> Add your deployed application URL here.

**Live Demo:** `https://your-username.github.io/EncodeX/`

---

## 🧰 Supported Encodings

| Encoding    | Encode | Decode | Example                         |
| ----------- | :----: | :----: | ------------------------------- |
| Base64      |    ✅   |    ✅   | `Hello` → `SGVsbG8=`            |
| URL         |    ✅   |    ✅   | `Hello World` → `Hello%20World` |
| Hexadecimal |    ✅   |    ✅   | `Hello` → `48 65 6c 6c 6f`      |
| Binary      |    ✅   |    ✅   | `A` → `01000001`                |

---

## 📌 Examples

### Base64

**Input**

```text
Hello EncodeX
```

**Encoded**

```text
SGVsbG8gRW5jb2RlWA==
```

---

### URL Encoding

**Input**

```text
Hello EncodeX!
```

**Encoded**

```text
Hello%20EncodeX!
```

---

### Hexadecimal

**Input**

```text
Hello
```

**Encoded**

```text
48 65 6c 6c 6f
```

---

### Binary

**Input**

```text
Hello
```

**Encoded**

```text
01001000 01100101 01101100 01101100 01101111
```

---

## ⌨️ Keyboard Shortcuts

| Shortcut               | Action |
| ---------------------- | ------ |
| `Ctrl + Enter`         | Encode |
| `Ctrl + Shift + Enter` | Decode |
| `Escape`               | Clear  |

---

## 🛠️ Tech Stack

EncodeX is intentionally built with simple web technologies.

| Technology | Purpose                        |
| ---------- | ------------------------------ |
| HTML5      | Application structure          |
| CSS3       | Styling and responsive design  |
| JavaScript | Encoding/decoding logic        |
| Web APIs   | UTF-8 and clipboard operations |

### No Framework Required

EncodeX does not depend on:

* React
* Vue
* Angular
* Node.js
* Backend APIs
* Database systems

Everything runs directly in the browser.

---

## 📂 Project Structure

```text
EncodeX/
│
├── index.html
├── README.md
├── LICENSE
│
├── css/
│   └── style.css
│
└── js/
    ├── app.js
    └── encoders.js
```

### File Overview

#### `index.html`

Contains the main application interface, including:

* Encoding selector
* Input area
* Output area
* Encode button
* Decode button
* Swap button
* Copy button
* Clear button

#### `css/style.css`

Handles:

* Application layout
* Dark theme
* Buttons
* Forms
* Cards
* Responsive design
* Mobile layouts

#### `js/encoders.js`

Contains the encoding and decoding engine for:

* Base64
* URL
* Hexadecimal
* Binary

#### `js/app.js`

Controls:

* DOM interactions
* Button events
* Encoding/decoding operations
* Clipboard functionality
* Input/output swapping
* Character counters
* Keyboard shortcuts
* Error handling

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/pokhrelsamir/EncodeX.git
```

### 2. Navigate to the Project

```bash
cd EncodeX
```

### 3. Open the Application

Simply open:

```text
index.html
```

in your preferred web browser.

No package installation or build process is required.

---

## 🌐 Running with a Local Server

You can also use a simple local development server.

### VS Code Live Server

Open the project in VS Code and launch `index.html` using the **Live Server** extension.

### Python

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

---

## 🔒 Privacy

EncodeX is designed as a **client-side application**.

Your input is processed directly inside your browser.

There is:

* ❌ No backend server
* ❌ No database
* ❌ No account required
* ❌ No text upload
* ❌ No external encoding API

This makes EncodeX suitable for quick local text transformation without sending the entered content to a remote service.


---

## 🧪 Testing

You can test EncodeX using common values such as:

```text
Hello
Hello EncodeX
Hello World!
123456789
EncodeX 🔤
नमस्ते
```

Test both **Encode** and **Decode** operations for each supported format.

### Recommended Test Cases

| Test                   | Expected Result        |
| ---------------------- | ---------------------- |
| Empty input            | Empty output           |
| Normal text            | Correct transformation |
| Unicode text           | Correct UTF-8 handling |
| Invalid Base64         | Error message          |
| Invalid Hex            | Error message          |
| Invalid Binary         | Error message          |
| URL special characters | Correct URL encoding   |
| Copy output            | Clipboard updated      |
| Swap                   | Input/output exchanged |
| Clear                  | Both fields emptied    |

---

## 🗺️ Roadmap

Future versions may include:

* [ ] ASCII encoder/decoder
* [ ] HTML Entity encoder/decoder
* [ ] Unicode converter
* [ ] JWT decoder
* [ ] Hash generation
* [ ] File encoding utilities
* [ ] Drag & drop file support
* [ ] Download encoded output
* [ ] Encoding history
* [ ] More keyboard shortcuts
* [ ] Light/Dark theme switcher
* [ ] Additional developer utilities

---

## 🤝 Contributing

Contributions are welcome.

### Fork the Repository

```bash
git fork
```

Or fork the repository directly through GitHub.

### Create a Branch

```bash
git checkout -b feature/new-encoder
```

### Make Your Changes

Implement your feature and test it thoroughly.

### Commit

```bash
git commit -m "Add new encoding feature"
```

### Push

```bash
git push origin feature/new-encoder
```

Then open a Pull Request.

---

## 📜 License

EncodeX is released under the **MIT License**.

See the [`LICENSE`](LICENSE) file for complete license information.

---

# 👨‍💻 Author

<div align="center">

### Samir Pokhrel

**B.Sc. CSIT Student | Web Developer | Networking Enthusiast**

Built using **HTML, CSS, and JavaScript**

<br>

<a href="https://github.com/pokhrelsamir">
  <img src="https://img.shields.io/badge/GitHub-pokhrelsamir-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</a>
<a href="https://www.linkedin.com/in/samirpokhrel/">
  <img src="https://img.shields.io/badge/LinkedIn-Samir%20Pokhrel-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
</a>

</div>

---

## ⭐ Support

If you find EncodeX useful:

* ⭐ Star the repository
* 🍴 Fork the project
* 🐛 Report issues
* 💡 Suggest new features
* 🤝 Contribute improvements

---

<div align="center">

## 🔤 EncodeX

**Encode it. Decode it. Understand it.**


<br>


</div>
