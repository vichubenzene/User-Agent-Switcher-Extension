# Contributing to User-Agent Switcher Extension

Thank you for your interest in contributing to the User-Agent Switcher Extension! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Google Chrome browser
- Basic knowledge of HTML, CSS, and JavaScript
- Understanding of Chrome Extension APIs
- Git for version control

### Development Setup
1. **Fork and clone** the repository
2. **Load the extension** in Chrome's developer mode
3. **Make your changes** in the `code/` directory
4. **Test thoroughly** before submitting

## 🛠️ Development Guidelines

### Code Style
- **HTML**: Use semantic HTML5 elements, proper indentation
- **CSS**: Follow BEM methodology, use consistent spacing
- **JavaScript**: Use ES6+ features, meaningful variable names
- **Comments**: Add comments for complex logic

### File Structure
```
code/
├── manifest.json          # Extension configuration
├── popup.html            # Main popup interface
├── popup.js              # Popup functionality
├── rules_*.json          # User-Agent rulesets
└── icon*.png             # Extension icons
```

### Adding New Features

#### 1. New Platform/Browser Support
```javascript
// Add to popup.js
if (choice === "new-platform-browser") {
  enableRulesetIds = ["new-platform-browser-ua"];
}

// Add to manifest.json
{
  "id": "new-platform-browser-ua",
  "enabled": false,
  "path": "rules_new_platform_browser.json"
}
```

#### 2. New Ruleset File
```json
[
  {
    "id": 1,
    "priority": 1,
    "action": {
      "type": "modifyHeaders",
      "requestHeaders": [
        {
          "header": "User-Agent",
          "operation": "set",
          "value": "Your User-Agent String Here"
        }
      ]
    },
    "condition": {
      "urlFilter": "*",
      "resourceTypes": ["main_frame"]
    }
  }
]
```

#### 3. UI Updates
- Add new platform section in `popup.html`
- Follow existing accordion pattern
- Maintain consistent styling

### Testing
- **Test on multiple websites** (Google, Facebook, etc.)
- **Verify User-Agent changes** using browser dev tools
- **Check different platforms** (Windows, macOS, Linux)
- **Test edge cases** (empty inputs, invalid URLs)

## 📝 Pull Request Process

### Before Submitting
1. **Test your changes** thoroughly
2. **Update documentation** if needed
3. **Follow the commit message format**
4. **Ensure no console errors**

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

Examples:
- `feat(android): add Samsung Galaxy support`
- `fix(ui): resolve accordion scroll issue`
- `docs(readme): update installation instructions`

### PR Checklist
- [ ] Code follows project style guidelines
- [ ] Changes are tested and working
- [ ] Documentation is updated
- [ ] No console errors or warnings
- [ ] User-Agent strings are realistic
- [ ] All platforms/browsers tested

## 🐛 Bug Reports

### Bug Report Template
```markdown
**Bug Description**
Brief description of the issue

**Steps to Reproduce**
1. Step 1
2. Step 2
3. Step 3

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**
- Chrome Version: XX.XX.XXXX.XX
- Extension Version: X.X
- OS: Windows/macOS/Linux

**Additional Information**
Screenshots, console logs, etc.
```

## 💡 Feature Requests

### Feature Request Template
```markdown
**Feature Description**
Brief description of the requested feature

**Use Case**
Why this feature would be useful

**Proposed Implementation**
How you think it could be implemented

**Additional Context**
Any other relevant information
```

## 🔧 Technical Requirements

### Chrome Extension APIs
- `declarativeNetRequest`: For modifying User-Agent headers
- `storage`: For saving user preferences
- `declarativeNetRequestWithHostAccess`: For host permissions

### Browser Compatibility
- **Minimum**: Chrome 88+
- **Target**: Latest Chrome version
- **Test**: Multiple Chrome versions

### Performance Considerations
- Keep ruleset files small and efficient
- Minimize DOM manipulation
- Use event delegation where appropriate
- Avoid blocking operations in popup

## 📚 Resources

### Documentation
- [Chrome Extension Manifest V3](https://developer.chrome.com/docs/extensions/mv3/)
- [Declarative Net Request API](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/)
- [Chrome Extension Best Practices](https://developer.chrome.com/docs/extensions/mv3/best_practices/)

### Tools
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Extension Reloader](https://chrome.google.com/webstore/detail/extensions-reloader/fimgpdaflelpphblkoamjoodncddnjic)

## 🤝 Community

### Communication
- **Issues**: Use GitHub Issues for bugs and feature requests
- **Discussions**: Use GitHub Discussions for questions and ideas
- **Code Review**: Be constructive and helpful in PR reviews

### Code of Conduct
- Be respectful and inclusive
- Help newcomers and answer questions
- Provide constructive feedback
- Follow the project's coding standards

## 📞 Getting Help

If you need help or have questions:
1. **Check existing issues** and discussions
2. **Search documentation** and resources
3. **Create a new issue** with clear details
4. **Join discussions** to ask questions

---

Thank you for contributing to making the User-Agent Switcher Extension better! 🎉
