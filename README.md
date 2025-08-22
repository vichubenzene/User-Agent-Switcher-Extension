# User Agent Switcher Extension

A powerful Chrome extension that allows you to switch between different User-Agent strings to test how websites appear on various devices and browsers.

## 🌟 Features

- **Multi-Platform Support**: Android, iPhone, Linux, macOS, Windows
- **Multiple Browsers**: Chrome, Firefox, Safari, Edge
- **Accordion Interface**: Clean, organized platform sections
- **Custom User-Agent**: Input your own custom UA strings
- **Sticky Status Bar**: Always see your current selection
- **No Scrolling Issues**: Smooth, professional interface

## 🚀 Installation

### From Source (Developer Mode)

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/user-agent-switcher.git
   cd user-agent-switcher
   ```

2. **Open Chrome** and go to `chrome://extensions/`

3. **Enable Developer Mode** (toggle in top-right corner)

4. **Click "Load unpacked"** and select the `code` folder

5. **Pin the extension** to your toolbar for easy access

### From Chrome Web Store
*Coming soon!*

## 📱 Supported Platforms & Browsers

| Platform | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| **Android** | ✅ | ✅ | - | - |
| **iPhone** | ✅ | ✅ | ✅ | - |
| **Linux** | ✅ | ✅ | - | - |
| **macOS** | ✅ | ✅ | ✅ | - |
| **Windows** | ✅ | ✅ | - | ✅ |

## 🎯 Usage

1. **Click the extension icon** in your toolbar
2. **Choose a platform** (Android, iPhone, Linux, macOS, Windows)
3. **Select a browser** (Chrome, Firefox, Safari, Edge)
4. **See the status** update at the bottom
5. **Use "Default / Revert"** to return to your browser's natural UA

### Custom User-Agent
- Enter any custom User-Agent string in the input box
- Click "Apply" to use it
- Perfect for testing specific UA strings

## 🛠️ Development

### Project Structure
```
code/
├── manifest.json          # Extension configuration
├── popup.html            # Main popup interface
├── popup.js              # Popup functionality
├── rules_*.json          # User-Agent rulesets
├── icon*.png             # Extension icons
└── _metadata/            # Chrome-generated files (auto-created)
```

### Building
1. Make changes to source files
2. Reload the extension in `chrome://extensions/`
3. Test your changes

### Adding New Platforms
1. Create a new ruleset file (e.g., `rules_platform_browser.json`)
2. Add the ruleset to `manifest.json`
3. Update `popup.js` with the new option
4. Add the UI element in `popup.html`

## 🔧 Technical Details

- **Manifest Version**: 3 (latest Chrome standard)
- **Permissions**: `declarativeNetRequest`, `storage`
- **Host Permissions**: `<all_urls>` (for all websites)
- **Icon Sizes**: 16x16, 32x32, 48x48, 128x128

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

### Contribution Guidelines
- Follow existing code style
- Test on multiple platforms
- Update documentation if needed
- Ensure all User-Agent strings are realistic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Chrome Extension API documentation
- Community contributors and testers
- Open source community

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/user-agent-switcher/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/user-agent-switcher/discussions)
- **Wiki**: [Project Wiki](https://github.com/yourusername/user-agent-switcher/wiki)

## 🔄 Changelog

### Version 1.2
- Added Linux, macOS, and Windows support
- Implemented accordion interface
- Added custom User-Agent input
- Improved sticky status bar
- Enhanced visual design

### Version 1.0
- Initial release with Android and iPhone support
- Basic User-Agent switching functionality

---

**Made with ❤️ for the web development community**
