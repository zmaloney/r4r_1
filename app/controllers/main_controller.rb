class MainController < ApplicationController
  def welcome
    # @composers = Composer.find(:all).sort_by {|c| [c.last_name, c.first_name]}
    @composers_count = Composer.count
    
    if ( @composers_count > 0 )
      @composers = Composer.all.sort_by {|c| [c.last_name, c.first_name]}
    else
      @composers = nil 
    end
    
    @tmp = params[:tmp]
    if ( @tmp.nil? )
      @tmp_count = 0
    else
      @tmp_count = 1
    end 
    
    
    @id = params[:id] 
    if (@id.nil? )
      @tmp_id = "unknown"
    else
      @tmp_id = params[:id]
    end 
    
    @tmp_id2 ||= params[:id]
  end
end
