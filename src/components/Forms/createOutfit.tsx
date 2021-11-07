import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import Select from "react-select";
import { ICollection, IWardrobe } from "../../interfaces/IModels";
import WardrobeService from "../../services/wardrobe";

const CreateOutfit = () => {
  const [vidUrl, setVidUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [selectedOption, setSelectedOption] =
    useState<{ label: string; value: ICollection }>();

  const [colOptions, setColOptions] = useState<
    { label: string; value: ICollection }[]
  >([]);
  const { currWardrobe } = useAuth();
  const getColOptions = async () => {
    const updatedWardrobe: IWardrobe | undefined =
      await WardrobeService.readOrCreateMine();
    if (updatedWardrobe) {
      setColOptions(
        updatedWardrobe.collections.map((col) => {
          return {
            label: col.name,
            value: col,
          };
        })
      );
    }
  };

  useEffect(() => {
    getColOptions();
  }, [currWardrobe]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <input
        value={vidUrl}
        onChange={(e) => setVidUrl(e.target.value)}
        type="text"
        name="vid_url"
        placeholder="Video Url"
      />
      <input
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        type="textarea"
        name="caption"
        placeholder="Caption"
      />
      <Select
        placeholder="Collection"
        options={colOptions}
        value={selectedOption}
        onChange={(option: any) => {
          setSelectedOption(option);
        }}
      ></Select>
    </div>
  );
};

export default CreateOutfit;
