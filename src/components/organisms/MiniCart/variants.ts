export const overlayVariants = {
  visible: {
    opacity: 0.7,
    transition: {
      ease: 'anticipate',
      duration: 0.7,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      ease: 'anticipate',
      duration: 1,
    },
  },
}

export const modalVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: 'anticipate',
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    x: '100%',
    transition: {
      ease: 'anticipate',
      duration: 0.5,
    },
  },
}

export const modalContentVariants = {
  visible: {
    opacity: 1,
    overflow: 'hidden',
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    overflow: 'hidden',
    transition: {
      duration: 3,
    },
  },
}
