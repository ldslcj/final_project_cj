class Api::ImagesController < ApplicationController
    def index
        render json: Image.all
    
    end

    def upload_1_image_with_data
        file = params[:file]
        if file 
            # if file try to unpload to cloudinary
            begin
            # Save image to the cloud (cloudinary)
            cloud_image = Cloudinary::Uploader.upload(file, 
                public_id: file.original_filename, 
                secure: true, 
                resource_type: :auto)
            # Save cloudainry image info to our database
            image = Image.create( url: cloud_image["secure_url"], 
                          format: cloud_image["format"],
                          original_filename: params[:name2] ? params[:name2] : cloud_image["original_filename"] )
            render json: {file:file, cloud_image: cloud_image, image: image}    
            # if file fails to upload to cloudaniary  
            # handle err 
            
            rescue => err
                render json: {
                    message:'failed to save to cloudinary or our database', 
                    errors: err}, status: 422   
            end

        end     
    end

    def destroy
        @image = Image.find(params[:id])
        @image.destroy
        render json: @image
      end
    
    def upload_1_image
        file = params[:file]
        if file
            begin
            cloud_image = Cloudinary::Uploader.upload(file, 
                public_id: file.original_filename, 
                secure: true, 
                resource_type: :auto)
                # This saves cloudinary image info to our database
                image = Image.create(url:cloud_image["secure_url"],
                            format: cloud_image["format"],
                            original_filename: cloud_image["original_filename"])
            render json: {file: file, cloud_image: cloud_image, image: image}
            rescue => err
                render json: {
                    message: 'failed to save to cloudinary or our database', 
                    errors: err}, status: 422
            end

        else

        end

    end
end
