local awful = require('awful')
local ruled = require('ruled')
local client_keys = require('config.client.keys')
local client_buttons = require('config.client.buttons')

ruled.client.connect_signal(
  'request::rules',
  function()
    ruled.client.append_rule {
      id = 'global',
      rule = {},
      properties = {
        focus = awful.client.focus.filter,
        raise = true,
        keys = client_keys,
        buttons = client_buttons,
        screen = awful.screen.preferred,
        placement = awful.placement.no_overlap + awful.placement.no_offscreen,
        floating = false,
        maximized = false,
        above = false,
        below = false,
        ontop = false,
        sticky = false,
        maximized_horizontal = false,
        maximized_vertical = false
      }
    }

    ruled.client.append_rule {
      id = 'round_clients',
      rule_any = {
        type = {
          'normal',
          'dialog'
        }
      },
      except_any = {
        name = {
          'Discord Updater'
        }
      },
      properties = {
        titlebars_enable = true
      }
    }

    ruled.client.append_rule {
			id = 'titlebars',
			rule_any = {
				type = {
					'normal',
					'dialog',
					'modal',
					'utility'
				}
			},
			properties = {
				titlebars_enabled = true
			}
		}

    ruled.client.append_rule {
			id = 'dialog',
			rule_any = {
				type = {
          'dialog',
          'modal'
        },
			},
			properties = {
				titlebars_enabled = true,
				floating = true,
				above = true,
				skip_decoration = true,
				placement = awful.placement.centered
			}
		}

    ruled.client.append_rule {
			id = 'utility',
			rule_any = {
				type = {'utility'}
			},
			properties = {
				titlebars_enabled = false,
				floating = true,
				skip_decoration = true,
				placement = awful.placement.centered
			}
		}

    ruled.client.append_rule {
			id = 'splash',
			rule_any = {
				type = {'splash'},
				name = {'Discord Updater'}
			},
			properties = {
				titlebars_enabled = false,
				floating = true,
				above = true,
				skip_decoration = true,
				placement = awful.placement.centered
			}
		}

  end
)
