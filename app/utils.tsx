export const smoothScroll = (event: React.MouseEvent, linkTo: string) => {
  event.preventDefault();
  document.querySelector(linkTo)?.scrollIntoView({ behavior: "smooth" });
};

export const smoothScrollToTop = (event: React.MouseEvent) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
};
