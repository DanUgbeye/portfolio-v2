export interface scrollOptions {
  offset?: number;
}

export default function scrollIntoView(hash?: string, options?: scrollOptions) {
  if (!window) return;

  if (!hash) {
    setTimeout(() => {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }, 100);
    return;
  }

  const element = document.getElementById(
    hash.replace("/", "").replace("#", "")
  );
  setTimeout(() => {
    window.scrollTo({
      behavior: element ? "smooth" : "auto",
      top: element ? element.offsetTop - (getHashOffset(hash) || 200) : 0,
    });
  }, 100);
}

type hashBreakpoints = {
  sm?: number,
  md?: number,
  xl?: number
}

const hashes: { [key: string]: hashBreakpoints; } = {
  about: {
    sm: 120,
    md: 150,
    xl: 224,
  },

  skills: {
    sm: 120,
    md: 130,
    xl: 224,
  },

  services: {
    sm: 150,
    xl: 224,
  },

  projects: {
    sm: 100,
    xl: 180,
  },

  contact: {
    sm: 70,
    xl: 30,
  },
};

type hashName = "about" | "skills" | "services" | "projects" | "contact";

export function getHashOffset(hash: string) {
  let selected = hashes[hash as hashName];
  if (selected) {
    if (window.visualViewport?.width && window.visualViewport?.width >= 1280) {
      return selected.xl;
    }
    if (window.visualViewport?.width && window.visualViewport?.width >= 640) {
      return selected.md ?? selected.xl;
    }
    return selected.sm;
  }
  return null;
}
