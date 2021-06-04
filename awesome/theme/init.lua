local gears = require('gears')
local dpi = require('beautiful').xresources.apply_dpi
local colors = require('theme.colors')

local awesome_dir = os.getenv("HOME") .. '/.config/new-awesome/'

local theme = {}

-- Fonts and Icons
theme.font                    = 'Open Sans Regular 12'
theme.font_bold               = 'Open Sans Bold 12'
theme.icon_theme              = 'Gruvbox-Material-Dark'
theme.icons                   = awesome_dir .. 'assets/icons/'

-- Defined Colors
theme.colors = colors

theme.border_focus  = colors.blue
theme.border_normal = colors.transparent

theme.wallpaper   = awesome_dir .. 'wallpaper.png'
theme.useless_gap = dpi(4)

theme.rounded_rect = function(cr, width, height)
  gears.shape.rounded_rect(cr, width, height, dpi(6))
end

theme.taglist_bg_empty = colors.bg
-- theme.taglist_bg_occupied = 'linear:0,0:' ..
-- dpi(48) ..
--   ',0:0,' ..
--   theme.colors.green ..
--       ':0.08,' .. theme.colors.green .. ':0.08,' .. theme.colors.bg .. ':1,' .. theme.colors.bg
theme.taglist_bg_occupied = colors.bg_light_3
theme.taglist_bg_urgent =
    'linear:0,0:' ..
    dpi(48) ..
      ',0:0,' ..
      theme.colors.red ..
          ':0.08,' .. theme.colors.red .. ':0.08,' .. theme.colors.bg .. ':1,' .. theme.colors.bg
  theme.taglist_bg_focus =
    'linear:0,0:' ..
    dpi(48) ..
      ',0:0,' ..
      theme.colors.blue ..
          ':0.08,' .. theme.colors.blue .. ':0.08,' .. theme.colors.bg .. ':1,' .. theme.colors.bg

return theme