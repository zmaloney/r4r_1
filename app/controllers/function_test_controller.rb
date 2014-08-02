class FunctionTestController < ApplicationController
  def index      
    # so this is redundant, as we're already rendering "index". 
    # However, if we had a different view, we could drop its name in here. 
    render "index"
  end
end
