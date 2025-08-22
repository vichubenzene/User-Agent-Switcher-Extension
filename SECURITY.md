# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.2.x   | :white_check_mark: |
| 1.1.x   | :white_check_mark: |
| 1.0.x   | :x:                |

## Reporting a Vulnerability

We take the security of the User-Agent Switcher Extension seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### Reporting Process

1. **Do NOT create a public GitHub issue** for the vulnerability
2. **Email us directly** at [security@yourdomain.com](mailto:security@yourdomain.com)
3. **Include detailed information** about the vulnerability
4. **Allow us time** to investigate and respond

### What to Include in Your Report

Please provide as much information as possible:

- **Description**: Clear description of the vulnerability
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Impact**: Potential impact of the vulnerability
- **Environment**: Browser version, OS, extension version
- **Proof of Concept**: If possible, include a proof of concept
- **Timeline**: Any disclosure timeline requirements

### Response Timeline

- **Initial Response**: Within 48 hours
- **Investigation**: Within 7 days
- **Fix Development**: Within 30 days (depending on complexity)
- **Public Disclosure**: Coordinated disclosure after fix is available

### Responsible Disclosure

We follow responsible disclosure practices:

1. **Investigate** reported vulnerabilities promptly
2. **Develop fixes** without unnecessary delays
3. **Coordinate disclosure** with the reporter
4. **Credit reporters** in security advisories
5. **Maintain transparency** about our security process

## Security Features

### Current Security Measures

- **Manifest V3**: Uses latest Chrome security standards
- **Limited Permissions**: Only requests necessary permissions
- **Content Security Policy**: Implements CSP for security
- **Input Validation**: Validates all user inputs
- **Secure Storage**: Uses Chrome's secure storage APIs

### Permission Justification

| Permission | Purpose | Security Impact |
|------------|---------|----------------|
| `declarativeNetRequest` | Modify User-Agent headers | Low - Only affects HTTP headers |
| `storage` | Save user preferences | Low - Local storage only |
| `<all_urls>` | Work on all websites | Medium - Required for functionality |

## Security Best Practices

### For Users

1. **Keep Chrome Updated**: Always use the latest Chrome version
2. **Verify Source**: Only install from trusted sources
3. **Review Permissions**: Understand what permissions are requested
4. **Report Issues**: Report any suspicious behavior immediately

### For Developers

1. **Code Review**: All code changes undergo security review
2. **Dependency Updates**: Regular updates of dependencies
3. **Security Testing**: Regular security testing and audits
4. **Vulnerability Scanning**: Automated vulnerability scanning

## Security Contacts

### Primary Security Contact
- **Email**: [security@yourdomain.com](mailto:security@yourdomain.com)
- **Response Time**: Within 48 hours

### Backup Security Contact
- **Email**: [backup-security@yourdomain.com](mailto:backup-security@yourdomain.com)
- **Response Time**: Within 72 hours

## Security Advisories

Security advisories will be published:

1. **GitHub Security Advisories**: For critical vulnerabilities
2. **Release Notes**: In CHANGELOG.md for all security fixes
3. **Email Notifications**: For users who opt-in to security updates

## Bug Bounty Program

We currently do not offer a formal bug bounty program, but we do:

- **Credit reporters** in security advisories
- **Acknowledge contributions** in our documentation
- **Consider rewards** for exceptional security research

## Security History

### Past Security Issues

| Date | Issue | Severity | Status |
|------|-------|----------|--------|
| None reported yet | - | - | - |

---

Thank you for helping keep the User-Agent Switcher Extension secure! 🔒
