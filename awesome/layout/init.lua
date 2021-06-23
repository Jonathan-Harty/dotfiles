local awful = require('awful')
local left_drawer = require('layout.left-drawer')

_G.screen.connect_signal(
  'request::desktop_decoration',
  function (screen)
    screen.left_drawer = left_drawer(screen)
  end
)

function UpdateBarsVisibility()
  for s in _G.screen do
    if s.selected_tag then
      local fullscreen = s.selected_tag.fullscreenMode

      if s.left_drawer then
        s.left_drawer.visible = not fullscreen
      end
    end
  end
end

_G.tag.connect_signal(
  'propertyy::selected',
  function(client)
    UpdateBarsVisibility()
  end
)

_G.client.connect_signal(
  'property::fullscreen',
  function(client)
    client.first_tag.fullscreenMode = client.fullscreen
    UpdateBarsVisibility()
  end
)

_G.client.connect_signal(
  'unmanage',
  function(client)
    if client.fullscreen then
      client.screen.selected_tag.fullscreenMode = false
      UpdateBarsVisibility()
    end
  end
)