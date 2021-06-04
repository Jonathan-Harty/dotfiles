local icons = require('assets.icons')
local apps = require('config.apps')
local awful = require('awful')

local tags = {
  {
    icon = icons.browser,
    type = 'browsers',
    default_app = apps.browser,
  },
  {
    icon = icons.code,
    type = 'code',
    default_app = apps.text_editor,
  },
  {
    icon = icons.social,
    type = 'social',
    default_app = apps.social,
  },
  {
    icon = icons.music,
    type = 'music',
    default_app = apps.music,
  },
  {
    icon = icons.files,
    type = 'files',
    default_app = apps.dolphin,
  },

  {
    icon = icons.art,
    type = 'art',
    default_app = apps.graphics,
  },
  {
    icon = icons.virts,
    type = 'virtual machines',
    default_app = apps.virt_machine,
  },
  {
    icon = icons.terminal,
    type = 'terminals',
    default_app = apps.terminal,
  },
  {
    icon = icons.sandbox,
    type = 'any',
    default_app = '',
  },
}

_G.tag.connect_signal(
	'request::default_layouts',
  function()
    awful.layout.append_default_layouts({
      awful.layout.suit.spiral,
      awful.layout.suit.floating,
      awful.layout.suit.fairh,
      awful.layout.suit.tile,
      awful.layout.suit.max
    })
  end
)

awful.screen.connect_for_each_screen(
  function(screen)
    for i, tag in pairs(tags) do
      awful.tag.add(
        i,
        {
          icon = tag.icon,
          icon_only = true,
          layout = tag.layout or awful.layout.suit.spiral,
          gap_single_client = true,
          gap = 8,
          screen = screen,
          default_app = tag.default_app,
          selected = i == 1
        }
      )
    end
  end
)

_G.tag.connect_signal(
  'property::layout',
  function(tag)
    local currrent_layout = awful.tag.getproperty(tag, 'layout')

    if currrent_layout == awful.layout.suit.max then
      tag.gap = 2
    else 
      tag.gap = 6
    end
  end
)