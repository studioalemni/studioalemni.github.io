---
layout: page
title: Legends of Astravia Beta Issues and Changes
redirect_from:
    - /beta-issues
---
# Known Issues (Beta)
The developer is aware of these problems, and will be addressing them in a future patch or in the game’s release version based on priority and severity. 
### All Platforms 
- “Pause” in battle doesn’t work when an animation is displaying
- In rare cases, some enemies may be targetable with items
- The camera can sometimes move jarringly and "snap" when moving between areas and in battle
- Enemies that die to burn will display a death animation twice
- The game needs to be relaunched to register an audio device change
- **(Softlock)** (Difficulty replicating) It is possible to get stuck jumping on the northeast pillar in the second dungeon room and require reloading a save.
- When selecting the Retro font or changing languages, it may not be applied to all menu elements until closing the menu.
- When using the Retro font, some menu elements may overlap.
- Some menu elements may be too small and difficult to read.
- The SFX in the second push block room is incorrectly timed
- Unusual building collision in the secret swamp area

### Windows 
- Rebinding controls with the F1 menu will not update the icon prompts in messages and menus.
- Rebinding only works for keyboard and will not work for some controllers; it is advised to use the Steam controller interface to rebind controller buttons instead.
- Some aggressive antivirus software, such as Avast, may declare the game executable as "suspicious" and require a scan before launching. This is a false positive, and likely due to the lack of official signing (an expensive process). The game's code is not a secret and can be viewed [here](https://github.com/JaidenAlemni/mkxp-z).

### macOS 
- None (yet)

### Linux/SteamOS 
- The game may not launch on all Linux distributions. In this case, we recommend using Steam's compatibility tool (Proton). 

# Changelog

## 0.6.4
- Fixed the missing "x" when picking up items using the Retro font
- Adjustments to what is recorded in the crash log
- Removed the beta warning / title

## 0.6.3 
- Fixed a crash that could occur when using an item and no valid targets are available (thanks Burt!) 
- Fixed a crash when the bug report form would appear 

## 0.6.2 
- Added an automatic bug report feature 
- Made empty equipment slots clearer 

## 0.6.1 
- Reduced the size of some state effects and animations 
- Made the "Fork" essence effect clearer 
- Fixed status effect text not displaying in Japanese 
- Fixed a bug where you could exit the dungeon early 
- Fixed inability to escape from certain battles  
- Fixed "To Title" on Game Over screen 
- Fixed misc collision and tiling issues 
- Fixed missing "!" from some explorable objects

## 0.6.0 
- A and B button prompt graphics are no longer swapped on Nintendo controllers 
- Added an option to provide feedback from within the options menu 
- Added an option to submit a bug report if the game crashes 
- Version update notice feature and better checking 
- Fixed a softlock in the dungeon 
- Fixed a bug where incorrect controls could display on the title screen 
-  **(Windows only)** Re-enabled temporary key-rebinding using F1 menu

## 0.5.7 
- Oliver no longer turns to an invisible tile when the action button is pressed in front of the Hammerfeld's stove 
- "X" no longer missing for item pickups when using the Retro font 
- Fixed a crash that would occur in certain instances in battle (thank you Zefir!) 

## 0.5.6 
- Initial closed beta release.