export function gameData() {
  return {
    passages: [
      {
        text: "You are woken up by a bang.\nYour room is dark, but bright sunlight filters through the curtains.\n[[continue->cont]]",
        links: [
          {
            name: "continue",
            link: "cont",
            pid: "2",
          },
        ],
        name: "Start",
        pid: "1",
        position: {
          x: "512",
          y: "190",
        },
        tags: ["passage"],
      },
      {
        text: "second passage gonna get into some options now uwu\n\n[[go to second passage -> second passage]]\n[[go to THIRD passage -> third passage]]",
        links: [
          {
            name: "go to second passage ",
            link: " second passage",
            pid: "3",
          },
          {
            name: "go to THIRD passage ",
            link: " third passage",
            pid: "4",
          },
        ],
        name: "cont",
        pid: "2",
        position: {
          x: "477",
          y: "386",
        },
      },
      {
        text: "branching passage lajs;flaksjf;laksjdf;lasjdf;alsdkjf;alskjdf;lsjf\n\n[[answer option 1-> answer branch 1]]\n[[answer option 2-> answer branch 2]]",
        links: [
          {
            name: "answer option 1",
            link: " answer branch 1",
            pid: "5",
          },
          {
            name: "answer option 2",
            link: " answer branch 2",
            pid: "6",
          },
        ],
        name: " second passage",
        pid: "3",
        position: {
          x: "477",
          y: "536",
        },
      },
      {
        text: "oh we're branching babey\n\n[[answer option 3-> answer branch 3]]\n[[answer option 4-> answer branch 4]]",
        links: [
          {
            name: "answer option 3",
            link: " answer branch 3",
            pid: "7",
          },
          {
            name: "answer option 4",
            link: " answer branch 4",
            pid: "8",
          },
        ],
        name: " third passage",
        pid: "4",
        position: {
          x: "1062",
          y: "531",
        },
      },
      {
        text: "first last node",
        name: " answer branch 1",
        pid: "5",
        position: {
          x: "402",
          y: "686",
        },
      },
      {
        text: "second last node\n",
        name: " answer branch 2",
        pid: "6",
        position: {
          x: "552",
          y: "686",
        },
      },
      {
        text: "third last node",
        name: " answer branch 3",
        pid: "7",
        position: {
          x: "874",
          y: "691",
        },
      },
      {
        text: "fourth last node",
        name: " answer branch 4",
        pid: "8",
        position: {
          x: "1137",
          y: "681",
        },
      },
    ],
    name: "test",
    startnode: "1",
    creator: "Twine",
    "creator-version": "2.3.14",
    ifid: "EF09B502-F76C-44D5-A421-A4320A34536E",
  };
}
