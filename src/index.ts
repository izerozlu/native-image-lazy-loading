const mutateImageListItem = (imageListItem: HTMLLIElement, index: number) => {
  const itemImage = imageListItem.querySelector(
    ".image-list__image"
  ) as HTMLImageElement;
  const itemPlaceholder = imageListItem.querySelector(
    ".image-list__placeholder"
  );

  itemImage.setAttribute("src", itemImage.getAttribute("src") + index);
  imageList.append(imageListItem);

  itemImage.addEventListener(
    "load",
    () => {
      itemImage.classList.toggle("image-list__image--loaded");
      itemPlaceholder.remove();
    },
    { once: true }
  );
};

const imageList = document.querySelector(".image-list");
const imageListItem = document.querySelector(
  ".image-list__list-item"
) as HTMLLIElement;
mutateImageListItem(imageListItem, 0);
new Array(20).fill(0).forEach((item, index) => {
  const itemClone = imageListItem.cloneNode(true) as HTMLLIElement;
  mutateImageListItem(itemClone, index + 1);
});
