const status = document.getElementById("status");

// Accordion functionality
document.querySelectorAll('.platform-header').forEach(header => {
  header.addEventListener('click', () => {
    const platform = header.dataset.platform;
    const content = document.querySelector(`[data-platform="${platform}"] + .platform-content`);
    const isExpanded = content.classList.contains('expanded');
    
    // Close all other sections
    document.querySelectorAll('.platform-content').forEach(content => {
      content.classList.remove('expanded');
    });
    document.querySelectorAll('.platform-header').forEach(h => {
      h.classList.remove('active');
    });
    
    // Toggle current section
    if (!isExpanded) {
      content.classList.add('expanded');
      header.classList.add('active');
    }
  });
});

// Detect current browser and platform
function detectCurrentBrowser() {
  const userAgent = navigator.userAgent;
  let browser = 'Unknown';
  let platform = 'Unknown';
  
  // Detect browser
  if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) {
    browser = 'Chrome';
  } else if (userAgent.includes('Firefox')) {
    browser = 'Firefox';
  } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
    browser = 'Safari';
  } else if (userAgent.includes('Edg')) {
    browser = 'Edge';
  }
  
  // Detect platform
  if (userAgent.includes('Windows')) {
    platform = 'Windows';
  } else if (userAgent.includes('Mac')) {
    platform = 'macOS';
  } else if (userAgent.includes('Linux')) {
    platform = 'Linux';
  } else if (userAgent.includes('Android')) {
    platform = 'Android';
  } else if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
    platform = 'iOS';
  }
  
  return { browser, platform };
}

// Handle radio button changes
document.querySelectorAll('input[name="ua"]').forEach(radio => {
  radio.addEventListener("change", async (e) => {
    const choice = e.target.value;

    // Remove selected class from all labels
    document.querySelectorAll('label').forEach(label => {
      label.classList.remove('selected');
    });

    // Add selected class to the checked label
    const checkedLabel = e.target.closest('label');
    if (checkedLabel) {
      checkedLabel.classList.add('selected');
    }

    // All possible ruleset IDs (including new platforms)
    const allRulesetIds = [
      "android-chrome-ua",
      "android-firefox-ua", 
      "iphone-chrome-ua",
      "iphone-firefox-ua",
      "iphone-safari-ua",
      "linux-chrome-ua",
      "linux-firefox-ua",
      "mac-chrome-ua",
      "mac-firefox-ua",
      "mac-safari-ua",
      "windows-chrome-ua",
      "windows-firefox-ua",
      "windows-edge-ua"
    ];

    let enableRulesetIds = [];
    let disableRulesetIds = allRulesetIds;

    // Map choices to specific rulesets
    if (choice === "android-chrome") enableRulesetIds = ["android-chrome-ua"];
    if (choice === "android-firefox") enableRulesetIds = ["android-firefox-ua"];
    if (choice === "iphone-chrome") enableRulesetIds = ["iphone-chrome-ua"];
    if (choice === "iphone-firefox") enableRulesetIds = ["iphone-firefox-ua"];
    if (choice === "iphone-safari") enableRulesetIds = ["iphone-safari-ua"];
    if (choice === "linux-chrome") enableRulesetIds = ["linux-chrome-ua"];
    if (choice === "linux-firefox") enableRulesetIds = ["linux-firefox-ua"];
    if (choice === "mac-chrome") enableRulesetIds = ["mac-chrome-ua"];
    if (choice === "mac-firefox") enableRulesetIds = ["mac-firefox-ua"];
    if (choice === "mac-safari") enableRulesetIds = ["mac-safari-ua"];
    if (choice === "windows-chrome") enableRulesetIds = ["windows-chrome-ua"];
    if (choice === "windows-firefox") enableRulesetIds = ["windows-firefox-ua"];
    if (choice === "windows-edge") enableRulesetIds = ["windows-edge-ua"];
    
    // For now, other platforms will use the default UA (no ruleset)
    // You can add more rulesets for these platforms later

    if (choice !== "default") {
      await chrome.declarativeNetRequest.updateEnabledRulesets({
        enableRulesetIds,
        disableRulesetIds
      });
    } else {
      // Disable all rulesets for default
      await chrome.declarativeNetRequest.updateEnabledRulesets({
        enableRulesetIds: [],
        disableRulesetIds: allRulesetIds
      });
    }

    chrome.storage.local.set({ selectedUA: choice });

    // Update status message
    let statusMessage = "";
    if (choice === "default") {
      const { browser, platform } = detectCurrentBrowser();
      statusMessage = `🔄 Reverted to Default (${platform} ${browser})`;
    } else {
      const [platform, browser] = choice.split("-");
      const platformName = platform === "android" ? "Android" : 
                          platform === "iphone" ? "iPhone" :
                          platform === "linux" ? "Linux" :
                          platform === "mac" ? "macOS" :
                          platform === "windows" ? "Windows" : platform;
      const browserName = browser.charAt(0).toUpperCase() + browser.slice(1);
      statusMessage = `✅ ${platformName} ${browserName} UA Enabled`;
    }
    
    status.textContent = statusMessage;
  });
});

// Handle custom UA input
document.getElementById('applyCustom').addEventListener('click', async () => {
  const customUA = document.getElementById('customUA').value.trim();
  
  if (!customUA) {
    status.textContent = "❌ Please enter a custom User-Agent string";
    return;
  }
  
  try {
    // For custom UA, we'll need to implement a different approach
    // since declarativeNetRequest rulesets are predefined
    // For now, we'll store it and show a message
    chrome.storage.local.set({ 
      selectedUA: 'custom',
      customUA: customUA 
    });
    
    status.textContent = `✅ Custom UA Applied: ${customUA.substring(0, 50)}${customUA.length > 50 ? '...' : ''}`;
    
    // Uncheck all radio buttons
    document.querySelectorAll('input[name="ua"]').forEach(radio => {
      radio.checked = false;
    });
    
  } catch (error) {
    status.textContent = "❌ Error applying custom UA";
    console.error('Error applying custom UA:', error);
  }
});

// Restore saved choice on load
chrome.storage.local.get(["selectedUA", "customUA"], (data) => {
  const saved = data.selectedUA || "default";
  
  if (saved === "custom" && data.customUA) {
    document.getElementById('customUA').value = data.customUA;
    status.textContent = `✅ Custom UA Active: ${data.customUA.substring(0, 50)}${data.customUA.length > 50 ? '...' : ''}`;
  } else {
    const el = document.querySelector(`input[value="${saved}"]`);
    if (el) {
      el.checked = true;
      // Add selected class to the restored choice
      const label = el.closest('label');
      if (label) {
        label.classList.add('selected');
      }
    }
  }
});

// Initialize default label

