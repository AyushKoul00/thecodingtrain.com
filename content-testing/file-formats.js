const video = {
  name: 'video',
  init: {
    type: 'object',
    properties: {
      title: { isRequired: true, type: 'string' },
      description: { isRequired: true, type: 'string' },
      videoNumber: { type: 'string' },
      videoId: { isRequired: true, type: 'string' },
      date: { type: 'string' },
      languages: { type: 'array', content: { type: 'string' } },
      topics: { type: 'array', content: { type: 'string' } },
      canContribute: { type: 'boolean' },
      relatedChallenges: { type: 'array', content: { type: 'string' } },
      timestamps: {
        type: 'array',
        content: {
          type: 'object',
          properties: {
            time: { isRequired: true, type: 'string' },
            title: { isRequired: true, type: 'string' }
          }
        }
      },
      codeExamples: {
        type: 'array',
        content: {
          type: 'object',
          properties: {
            title: { isRequired: true, type: 'string' },
            description: { type: 'string' },
            image: { type: 'string' },
            urls: {
              isRequired: true,
              type: 'object',
              properties: {
                p5: { type: 'string' },
                processing: { type: 'string' },
                node: { type: 'string' },
                other: { type: 'string' }
              }
            }
          }
        }
      },
      groupLinks: {
        type: 'array',
        content: {
          type: 'object',
          properties: {
            title: { isRequired: true, type: 'string' },
            links: {
              isRequired: true,
              type: 'array',
              content: {
                type: 'object',
                properties: {
                  title: { isRequired: true, type: 'string' },
                  url: { isRequired: true, type: 'string' },
                  icon: { type: 'string' },
                  description: { type: 'string' }
                }
              }
            }
          }
        }
      }
    }
  }
};

const track = {
  name: 'track',
  init: {
    type: 'object',
    properties: {
      title: { isRequired: true, type: 'string' },
      date: { type: 'string' },
      description: { isRequired: true, type: 'string' },
      chapters: {
        isRequired: true,
        requireAlternative: 'videos',
        type: 'array',
        content: {
          type: 'object',
          properties: {
            title: { isRequired: true, type: 'string' },
            videos: {
              isRequired: true,
              type: 'array',
              content: { type: 'string' }
            }
          }
        }
      },
      videos: {
        isRequired: true,
        requireAlternative: 'chapters',
        type: 'array',
        content: { type: 'string' }
      }
    }
  }
};

const contribution = {
  name: 'showcase',
  init: {
    type: 'object',
    properties: {
      title: { isRequired: true, type: 'string' },
      author: {
        isRequired: true,
        type: 'object',
        properties: {
          name: { isRequired: true, type: 'string' },
          url: { type: 'string' }
        }
      },
      url: { type: 'string' },
      source: { type: 'string' },
      videoId: { type: 'string' }
    }
  }
};

const faqPage = {
  name: 'faqPage',
  init: {
    type: 'object',
    properties: {
      title: { type: 'string', isRequired: true },
      description: { type: 'string', isRequired: true },
      sections: {
        isRequired: true,
        type: 'array',
        content: {
          type: 'object',
          properties: {
            title: { type: 'string', isRequired: true },
            questions: {
              type: 'array',
              isRequired: true,
              content: { type: 'string' }
            }
          }
        }
      }
    }
  }
};

const faq = {
  name: 'faq',
  init: {
    type: 'object',
    properties: {
      question: { isRequired: true, type: 'string' },
      answer: {
        isRequired: true,
        type: 'object',
        properties: {
          text: { isRequired: true, type: 'string' },
          list: { type: 'array', content: { type: 'string' } }
        }
      }
    }
  }
};

const talk = {
  name: 'talk',
  init: {
    type: 'object',
    properties: {
      title: {
        isRequired: true,
        type: 'string'
      },
      meta: {
        isRequired: true,
        type: 'string'
      },
      description: {
        isRequired: true,
        type: 'string'
      },
      link: {
        isRequired: true,
        type: 'string'
      }
    }
  }
};

const collaborators = {
  name: 'collaborators',
  init: {
    type: 'object',
    properties: {
      team: {
        isRequired: true,
        type: 'array',
        content: {
          type: 'object',
          properties: { name: { type: 'string' }, url: { type: 'string' } }
        }
      },
      contributors: {
        isRequired: true,
        type: 'array',
        content: {
          type: 'object',
          properties: { name: { type: 'string' }, url: { type: 'string' } }
        }
      }
    }
  }
};

module.exports = {
  video,
  track,
  contribution,
  faq,
  faqPage,
  talk,
  collaborators
};
