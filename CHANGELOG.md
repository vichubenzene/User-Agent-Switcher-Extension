# Changelog

All notable changes to the User-Agent Switcher Extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Site-specific User-Agent rules
- Export/Import settings
- Keyboard shortcuts
- Dark mode support

## [1.2.0] - 2024-08-22

### Added
- **New Platforms**: Linux, macOS, and Windows support
- **Additional Browsers**: Edge browser for Windows
- **Accordion Interface**: Collapsible platform sections for better organization
- **Custom User-Agent Input**: Ability to input custom UA strings
- **Sticky Status Bar**: Always-visible status display at bottom
- **Enhanced Icons**: Properly sized icons (16x16, 32x32, 48x48, 128x128)

### Changed
- **UI Redesign**: Complete interface overhaul with modern design
- **Layout**: Fixed height popup with scrollable content area
- **Default Option**: Changed to "Default / Revert" for clarity
- **Status Messages**: More descriptive status updates with platform/browser info

### Improved
- **User Experience**: No more scrolling issues or overlapping content
- **Visual Feedback**: Better selection indicators and hover effects
- **Performance**: Optimized accordion animations and transitions
- **Accessibility**: Better contrast and visual hierarchy

### Technical
- **Manifest V3**: Full compliance with latest Chrome standards
- **Ruleset Management**: Comprehensive ruleset handling for all platforms
- **Error Handling**: Better error handling and user feedback
- **Code Structure**: Improved JavaScript organization and modularity

## [1.1.0] - 2024-08-15

### Added
- **iPhone Safari Support**: Added Safari browser for iPhone platform
- **Enhanced Status Display**: Better status messages and visual feedback

### Changed
- **UI Improvements**: Minor interface enhancements
- **Code Optimization**: Better performance and cleaner code

## [1.0.0] - 2024-08-01

### Added
- **Initial Release**: Basic User-Agent switching functionality
- **Platform Support**: Android and iPhone platforms
- **Browser Support**: Chrome and Firefox for mobile platforms
- **Core Features**: 
  - User-Agent switching between platforms
  - Persistent settings storage
  - Simple popup interface
  - Basic status display

### Technical
- **Manifest V3**: Built with latest Chrome extension standards
- **Declarative Net Request**: Uses modern Chrome APIs
- **Storage API**: Local storage for user preferences
- **Basic Rulesets**: Initial ruleset files for mobile platforms

---

## Version Compatibility

| Extension Version | Chrome Version | Manifest Version | Features |
|------------------|----------------|------------------|----------|
| 1.2.0+          | 88+            | V3               | Full feature set |
| 1.0.0 - 1.1.0   | 88+            | V3               | Basic functionality |

## Migration Notes

### From 1.1.0 to 1.2.0
- No breaking changes
- New platforms automatically available
- Existing settings preserved
- Enhanced UI with accordion interface

### From 1.0.0 to 1.2.0
- No breaking changes
- All previous functionality maintained
- New features added seamlessly
- Improved user experience

## Known Issues

### Version 1.2.0
- None currently reported

### Version 1.1.0
- Fixed: Status bar overlap issues
- Fixed: Scrollbar always visible

### Version 1.0.0
- Fixed: Basic functionality issues
- Fixed: Initial release bugs

---

For detailed information about each release, please refer to the [GitHub Releases](https://github.com/yourusername/user-agent-switcher/releases) page.
