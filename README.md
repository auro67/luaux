Updated README

# Luau-Starlit

Luau-Starlit is a custom VSCode extension by Starlit Studios, designed for developers using the Luau scripting language. This extension includes a specialized theme and optional grammar tweaks for `.luaux` files.

## Features

- **Custom Syntax Highlighting:**
    - Errors like `assert` are bold dark red for visibility.
    - Non-error keywords like `print` are bright off-white for distinction.
    - Muted keywords such as `local` reduce visual clutter.
- **Enhanced Comments for `.luaux` Files:**
    ```lua
    -- Standard comment
    --> Note comment
    --! Warning comment
    --X Critical comment

    --TODO To-do task
    --FIXME Needs fixing
    --NOTE Important note

    -->> Bold note
    --!! Bold warning
    --XX Bold critical
    ```
    **Theme-Only Option**:
        Use .lua or .luau files for theming ***only***.
        Use .luaux or .luax for additional functionality.

## Extension Settings

    luau-starlit.enableFullFunctionality:
        true (default): Full functionality for .luaux files (grammar tweaks, custom colors, enhanced comments).
        false: Only theming is applied.

## Requirements

**No special requirements. Works seamlessly with .lua, .luau, and .luaux files.**
## Known Issues
- Conflicts with other Lua extensions may arise when full functionality is enabled.
- .luaux files are recommended for best results.


## Contributing

Feedback, issues, or contributions are welcome! Visit the GitHub Repository to report bugs or submit feature requests.


---

### Key Benefits
1. **Flexibility for Users:**
   Users can choose between lightweight theming or advanced tweaks.
2. **Better User Experience:**
   `.lua` and `.luau` remain compatible without introducing unexpected changes, while `.luaux` allows experimentation.
3. **Customizability:**
   Future updates can extend the toggle to include other features like formatting rules or snippet behavior.

---