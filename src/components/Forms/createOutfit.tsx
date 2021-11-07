import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import Select from "react-select";
import { ICollection, IProduct, IWardrobe } from "../../interfaces/IModels";
import WardrobeService from "../../services/wardrobe";
import ProductService from "../../services/product";
import OutfitService from "../../services/outfit";
import { useHistory } from "react-router-dom";

const CreateOutfit = () => {
  const [vidUrl, setVidUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [selectedOption, setSelectedOption] =
    useState<{ label: string; value: ICollection }>();

  const [colOptions, setColOptions] = useState<
    { label: string; value: ICollection }[]
  >([]);
  const history = useHistory();

  const { currWardrobe, currFirebaseUser } = useAuth();
  const getColOptions = async () => {
    const updatedWardrobe: IWardrobe | undefined =
      await WardrobeService.readOrCreateMine(
        {},
        await currFirebaseUser?.getIdToken()
      );
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
  const [selectedProdOption, setSelectedProdOption] =
    useState<{ label: string; value: IProduct }[]>();

  const [prodOptions, setProdOptions] = useState<
    { label: string; value: IProduct }[]
  >([]);

  const getProdOptions = async () => {
    const products: [IProduct] | undefined = await ProductService.getAll();
    if (products)
      setProdOptions(products.map((p) => ({ label: p.name, value: p })));
  };

  useEffect(() => {
    getColOptions();
  }, [currWardrobe]);

  const handleSubmit = async () => {
    await OutfitService.create({
      _id: "",
      caption,
      products: selectedProdOption?.map((p) => p.value) || [],
      vid_url: vidUrl,
      collection: selectedOption?.value,
    });
    history.push("/");
  };
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
      <Select
        placeholder="Products"
        options={prodOptions}
        value={selectedProdOption}
        onChange={(option: any) => {
          setSelectedProdOption(option);
        }}
        isMulti
      ></Select>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CreateOutfit;
