class EditionController < ApplicationController
  
  def show
    @edition = Edition.find(params[:id])
    @work = Work.find(@edition.work_id)
  end
  
end
