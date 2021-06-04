local wibox = require('wibox')
local awful = require('awful')
local dpi = require('beautiful').xresources.apply_dpi
local container = require('widgets.icon.container')
local keys = require('config.keys')
local mod_key = keys.mod_keys.mod_key

local function CreateButtons(buttons, object)
  if buttons then
    local btns = {}
    for _, b in ipairs(buttons) do
      local btn = _G.button {
        modifiers = b.modifiers,
        button = b.button
      }

      btn:connect_signal(
        'press',
        function()
          b:emit_signal('press', object)
        end
      )

      btn:connect_signal(
        'release',
        function()
          b:emit_signal('release', object)
        end
      )

      btns[#btns + 1] = btn
    end

    return btns
  end
end

local function ListUpdate(w, buttons, label, data, objects)
  w:reset()
  for i, o in ipairs(objects) do
    local cache = data[o]
    local ib, tb, bgb, tbm, ibm, l, bg_clickable
    if cache then
      ib = cache.ib
      tb = cache.tb
      bgb = cache.bgb
      tbm = cache.tbm
      ibm = cache.ibm
    else
      ib = wibox.widget.imagebox()
      tb = wibox.widget.textbox()
      bgb = wibox.container.background()
      tbm = wibox.container.margin(tb, dpi(4), dpi(16))
      ibm = wibox.container.margin(ib, dpi(12), dpi(12), dpi(12), dpi(12))
      l = wibox.layout.fixed.horizontal()
      bg_clickable = container()

      l:fill_space(true)
      l:add(ibm)
      bg_clickable:set_widget(l)
      bgb:set_widget(bg_clickable)
      bgb:buttons(CreateButtons(buttons, o))

      data[o] = {
        ib = ib,
        tb = tb,
        bgb = bgb,
        tbm = tbm,
        ibm = ibm
      }
    end

    local text, bg, bg_image, icon, args = label(o, tb)
    args = args or {}

    if text == nil or text == '' then
      tbm:set_margins(0)
    else
      if not tb:set_markup_silently(text) then
        tb:set_markup('<i>&lt;Invalid text&gt;</i>')
      end
    end

    bgb:set_bg(bg)

    if type(bg_image) == 'function' then
      bg_image = bg_image(tb, o ,nil, objects, i)
    end

    bgb:set_bgimage(bg_image)

    if icon then
      ib.image = icon
    else
      ibm:set_margins(0)
    end

    bgb.shape = args.shape
    bgb.shape_border_width = args.shape_border_width
    bgb.shape_border_color = args.shape_border_color

    w:add(bgb)
  end
end

local function TagList(s)
  local tag_list = awful.widget.taglist(
    s,
    awful.widget.taglist.filter.all,
    awful.util.table.join(
      awful.button(
        {},
        1,
        function(tag)
          tag:view_only()
        end
      ),
      awful.button(
        {mod_key},
        1,
        function(tag)
          if _G.client.focus then
            _G.client.focus:move_to_tag(tag)
            tag:view_only()
          end
        end
      ),
      awful.button(
        {},
        3,
        awful.tag.viewtoggle
      ),
      awful.button(
        {mod_key},
        3,
        function(tag)
          if _G.client.focus then
            _G.client.focus:toggle_tag(tag)
          end
        end
      ),
      awful.button(
        {},
        4,
        function(tag)
          awful.tag.viewprev(tag.screen)
        end
      ),
      awful.button(
        {},
        5,
        function(tag)
          awful.tag.viewnext(tag.screen)
        end
      )
    ),
    {},
    ListUpdate,
    wibox.layout.fixed.vertical()
  )

  return tag_list
end

return TagList