const CLOUDINARY_CLOUD_NAME = 'abhinithame';
const FOLDER_PATH = 'saimandir-events-history';

function loadCloudinaryGallery() {
    const galleryContainer = document.getElementById('gallery');
    
    // Using Cloudinary's list resource API
    const url = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/list/${FOLDER_PATH}.json`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.resources && data.resources.length > 0) {
                data.resources.forEach(resource => {
                    // Create column div for grid layout
                    const colDiv = document.createElement('div');
                    colDiv.className = 'col-lg-4 col-md-6 col-sm-6';
                    
                    // Create custom picture element
                    const pictureElement = document.createElement('saimandir-picture');
                    pictureElement.setAttribute('src', `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${resource.public_id}.${resource.format}`);
                    pictureElement.setAttribute('expand', 'true');
                    
                    colDiv.appendChild(pictureElement);
                    galleryContainer.appendChild(colDiv);
                });
            } else {
                galleryContainer.innerHTML = '<div class="col-12 text-center"><p>No images found in gallery</p></div>';
            }
        })
        .catch(error => {
            console.error('Error loading gallery:', error);
            galleryContainer.innerHTML = '<div class="col-12 text-center"><p>Error loading gallery</p></div>';
        });
}