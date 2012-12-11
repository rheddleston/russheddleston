require 'bundler/setup'
require 'sinatra'
require 'sinatra/assetpack'

Sinatra::Application.register Sinatra::AssetPack

configure :production do
  require 'newrelic_rpm'
end

assets {
  serve '/js',     from: 'public/js'        # Optional
  serve '/css',    from: 'public/css'       # Optional
  serve '/images', from: 'public/images'    # Optional

  js :main, [
    '/js/main.js'
  ]

  css :main, [
    '/css/main.css'
  ]

  js_compression  :jsmin      # Optional
  css_compression :yui        # Optional
}

get '/' do
  erb :index
end

