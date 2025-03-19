"use client";
import { useState } from "react";
import { Props } from "./interfaces";
import { FilterableTentsContext, useContextFilterableTents } from "./context";
import styles from "./styles/styles.module.css";
import TentCard from "./childrens/TentCard";
import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const categorias = [
  "todas",
  "carpas dos aguas",
  "carpas cuatro aguas",
  "carpas pagodas",
  "carpas hangares",
  "carpas plegables",
];

const FilterableTents = ({ tents, children }: Props) => {
  const [filterWord, setFilterWord] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("todas");

  return (
    <FilterableTentsContext.Provider
      value={{
        filterWord,
        setFilterWord,
        tents,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      <div className={styles.contentGrid}>{children}</div>
    </FilterableTentsContext.Provider>
  );
};

FilterableTents.SearchBar = function SearchBar({}) {
  const { filterWord, setFilterWord, selectedCategory, setSelectedCategory } =
    useContextFilterableTents();
  return (
    <section className={styles.sectionForm}>
      <form className={styles.formTents}>
        <Link href="/">
          <div style={{ cursor: "pointer", color: "white", padding: ".5rem" }}>
            <IoMdArrowRoundBack size={25} />
          </div>
        </Link>
        <div className={styles.contentLogo}>
          <Image
            src={"/assets/logo-light.svg"}
            alt="logo-carpa"
            loading="lazy"
            quality={100}
            width={150}
            height={50}
            priority={false}
          />
        </div>

        <div className={styles.contentInputs}>
          <select
            className={styles.selectTent}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categorias.map((categoria, index) => (
              <option key={index} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
          <input
            className={styles.inputTent}
            type="text"
            value={filterWord}
            placeholder="Click para buscar una carpa"
            onChange={(e) => setFilterWord(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

FilterableTents.TentsGrid = function TentsGrid({}) {
  const { filterWord, tents, selectedCategory } = useContextFilterableTents();
  const filteredTents = tents.filter((tent) => {
    const matchesSearch = tent.categoria
      .toLowerCase()
      .includes(filterWord.toLowerCase());
    const matchesCategory =
      selectedCategory === "todas" || tent.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {filteredTents.length > 0 ? (
        <LightGallery
          speed={500}
          plugins={[]}
          elementClassNames={styles.tentGrid}
        >
          {filteredTents.map((tent) => (
            <div
              key={tent.id}
              data-src={tent.imgUrl}
              className={styles.galleryItem}
            >
              <TentCard tent={tent} />
            </div>
          ))}
        </LightGallery>
      ) : (
        <div className={styles.noTentMessage}>
          <h2>No se encontró la carpa</h2>
          <p>Intenta ajustar tu búsqueda o explora otras categorías.</p>
        </div>
      )}
    </div>
  );
};

export default FilterableTents;
