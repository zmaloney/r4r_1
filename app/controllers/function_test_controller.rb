class FunctionTestController < ApplicationController
  def index      
    # so this is redundant, as we're already rendering "index" (via javaScript) 
    # However, if we had a different view, we could drop its name in here. 
    # Here is the problem -- this will render a screwed-up HTML with a whole bunch of extra stuff. 
    # render "index"
  end
end
