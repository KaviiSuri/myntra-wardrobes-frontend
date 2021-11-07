import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import NavBar from "../navbar";
import "./uploadImage.css";
export default function UploadImage() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <>
      <NavBar />
      <div className="App">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <div className="upload__imgcontainer">
                <button
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  className={"upload__buttons"}
                  {...dragProps}
                >
                  Add New Images
                </button>
                &nbsp;
                <button
                  className={"upload__buttons"}
                  onClick={onImageRemoveAll}
                >
                  Remove all images
                </button>
              </div>
              <div className="uploaded_imgs">
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image.dataURL} alt="" className="img_thumb" />
                    <div className="image-item__btn-wrapper">
                      <button onClick={() => onImageUpdate(index)}>
                        Update
                      </button>
                      <button onClick={() => onImageRemove(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </ImageUploading>
      </div>
    </>
  );
}
