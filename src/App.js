import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

const data = {
        "code": 200,
        "status": "Ok",
        "copyright": "© 2018 MARVEL",
        "attributionText": "Data provided by Marvel. © 2018 MARVEL",
        "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2018 MARVEL</a>",
        "etag": "52f5e8ca028d00662c62e54c569cc5851327a2cc",
        "data": {
            "offset": 0,
            "limit": 20,
            "total": 323,
            "count": 20,
            "results": [
                {
                    "id": 60610,
                    "digitalId": 0,
                    "title": "Deadpool (2015) #36",
                    "issueNumber": 36,
                    "variantDescription": "",
                    "description": "SECRET EMPIRE AFTERMATH! Everything works out great and Deadpool gets a happy ending Wait - are we allowed to lie in solicits? We are, right?",
                    "modified": "2017-09-06T16:08:30-0400",
                    "isbn": "",
                    "upc": "75960608332903611",
                    "diamondCode": "JUL171032",
                    "ean": "",
                    "issn": "1946-9292",
                    "format": "Comic",
                    "pageCount": 32,
                    "textObjects": [
                        {
                            "type": "issue_solicit_text",
                            "language": "en-us",
                            "text": "SECRET EMPIRE AFTERMATH! Everything works out great and Deadpool gets a happy ending Wait - are we allowed to lie in solicits? We are, right?"
                        }
                    ],
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/60610",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/60610/deadpool_2015_36?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "purchase",
                            "url": "http://comicstore.marvel.com/Deadpool-36/digital-comic/45728?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
                        "name": "Deadpool (2015 - 2017)"
                    },
                    "variants": [],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2017-09-13T00:00:00-0400"
                        },
                        {
                            "type": "focDate",
                            "date": "2017-08-21T00:00:00-0400"
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 3.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/e0/59b04cb0bb952",
                        "extension": "jpg"
                    },
                    "images": [
                        {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/e0/59b04cb0bb952",
                            "extension": "jpg"
                        },
                        {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/10/597f90b7ab93d",
                            "extension": "jpg"
                        }
                    ],
                    "creators": {
                        "available": 7,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60610/creators",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                                "name": "Gerry Duggan",
                                "role": "writer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/9081",
                                "name": "Matteo Lolli",
                                "role": "penciler"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12392",
                                "name": "David Lopez",
                                "role": "inker (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/13008",
                                "name": "Ruth Redmond",
                                "role": "colorist"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                                "name": "Vc Joe Sabino",
                                "role": "letterer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8230",
                                "name": "Christian Dalla Vecchia",
                                "role": "inker"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                                "name": "Jordan White",
                                "role": "editor"
                            }
                        ],
                        "returned": 7
                    },
                    "characters": {
                        "available": 1,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60610/characters",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                                "name": "Deadpool"
                            }
                        ],
                        "returned": 1
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60610/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131689",
                                "name": "cover from Deadpool (2015) #36",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131690",
                                "name": "story from Deadpool (2015) #36",
                                "type": "interiorStory"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 1,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60610/events",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
                                "name": "Secret Empire"
                            }
                        ],
                        "returned": 1
                    }
                },
                {
                    "id": 60609,
                    "digitalId": 0,
                    "title": "Deadpool (2015) #35",
                    "issueNumber": 35,
                    "variantDescription": "",
                    "description": "SECRET EMPIRE TIE-IN! Deadpool's sided with Hydra for too long - but no more! He's totally going to turn things around and take down Steve Rogers! He's going to put a stop to this whole Secret Empire once and for all! Yeah - that's the ticket...",
                    "modified": "2017-08-22T17:44:03-0400",
                    "isbn": "",
                    "upc": "75960608332903511",
                    "diamondCode": "JUN170901",
                    "ean": "",
                    "issn": "1946-9292",
                    "format": "Comic",
                    "pageCount": 32,
                    "textObjects": [
                        {
                            "type": "issue_solicit_text",
                            "language": "en-us",
                            "text": "SECRET EMPIRE TIE-IN! Deadpool's sided with Hydra for too long - but no more! He's totally going to turn things around and take down Steve Rogers! He's going to put a stop to this whole Secret Empire once and for all! Yeah - that's the ticket..."
                        }
                    ],
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/60609",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/60609/deadpool_2015_35?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "purchase",
                            "url": "http://comicstore.marvel.com/Deadpool-35/digital-comic/45445?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
                        "name": "Deadpool (2015 - 2017)"
                    },
                    "variants": [],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2017-08-30T00:00:00-0400"
                        },
                        {
                            "type": "focDate",
                            "date": "2017-08-07T00:00:00-0400"
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 3.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/b0/59934d239ec11",
                        "extension": "jpg"
                    },
                    "images": [
                        {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/b0/59934d239ec11",
                            "extension": "jpg"
                        }
                    ],
                    "creators": {
                        "available": 7,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60609/creators",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                                "name": "Gerry Duggan",
                                "role": "writer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/942",
                                "name": "Mike Hawthorne",
                                "role": "penciler"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12392",
                                "name": "David Lopez",
                                "role": "penciler (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/1371",
                                "name": "Terry Pallot",
                                "role": "inker"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/13008",
                                "name": "Ruth Redmond",
                                "role": "colorist"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                                "name": "Vc Joe Sabino",
                                "role": "letterer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                                "name": "Jordan White",
                                "role": "editor"
                            }
                        ],
                        "returned": 7
                    },
                    "characters": {
                        "available": 1,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60609/characters",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                                "name": "Deadpool"
                            }
                        ],
                        "returned": 1
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60609/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131687",
                                "name": "cover from Deadpool (2015) #35",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131688",
                                "name": "story from Deadpool (2015) #35",
                                "type": "interiorStory"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 1,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60609/events",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
                                "name": "Secret Empire"
                            }
                        ],
                        "returned": 1
                    }
                },
                {
                    "id": 60608,
                    "digitalId": 0,
                    "title": "Deadpool (2015) #34",
                    "issueNumber": 34,
                    "variantDescription": "",
                    "description": "SECRET EMPIRE TIE-IN! It's not easy living under a Hydra government. Especially when you accidentally sided with them. Yeah — Deadpool messed up pretty badly this time. PLUS: Deadpool vs. Agent Preston for the fate of Ellie!",
                    "modified": "2017-07-21T14:47:37-0400",
                    "isbn": "",
                    "upc": "75960608332903411",
                    "diamondCode": "MAY170789",
                    "ean": "",
                    "issn": "1946-9292",
                    "format": "Comic",
                    "pageCount": 32,
                    "textObjects": [
                        {
                            "type": "issue_solicit_text",
                            "language": "en-us",
                            "text": "SECRET EMPIRE TIE-IN! It's not easy living under a Hydra government. Especially when you accidentally sided with them. Yeah — Deadpool messed up pretty badly this time. PLUS: Deadpool vs. Agent Preston for the fate of Ellie!"
                        }
                    ],
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/60608",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/60608/deadpool_2015_34?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "purchase",
                            "url": "http://comicstore.marvel.com/Deadpool-34/digital-comic/45277?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
                        "name": "Deadpool (2015 - 2017)"
                    },
                    "variants": [],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2017-07-26T00:00:00-0400"
                        },
                        {
                            "type": "focDate",
                            "date": "2017-07-03T00:00:00-0400"
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 3.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/60/596d113ccd329",
                        "extension": "jpg"
                    },
                    "images": [
                        {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/60/596d113ccd329",
                            "extension": "jpg"
                        }
                    ],
                    "creators": {
                        "available": 9,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60608/creators",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                                "name": "Gerry Duggan",
                                "role": "writer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/942",
                                "name": "Mike Hawthorne",
                                "role": "penciler"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/9081",
                                "name": "Matteo Lolli",
                                "role": "penciler"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12392",
                                "name": "David Lopez",
                                "role": "inker (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/1371",
                                "name": "Terry Pallot",
                                "role": "inker"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8230",
                                "name": "Christian Dalla Vecchia",
                                "role": "inker"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/13008",
                                "name": "Ruth Redmond",
                                "role": "colorist"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                                "name": "Vc Joe Sabino",
                                "role": "letterer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                                "name": "Jordan White",
                                "role": "editor"
                            }
                        ],
                        "returned": 9
                    },
                    "characters": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60608/characters",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                                "name": "Deadpool"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009359",
                                "name": "Hydra"
                            }
                        ],
                        "returned": 2
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60608/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131685",
                                "name": "cover from Deadpool (2015) #34",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131686",
                                "name": "story from Deadpool (2015) #34",
                                "type": "interiorStory"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 1,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60608/events",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
                                "name": "Secret Empire"
                            }
                        ],
                        "returned": 1
                    }
                },
                {
                    "id": 60607,
                    "digitalId": 45278,
                    "title": "Deadpool (2015) #33",
                    "issueNumber": 33,
                    "variantDescription": "",
                    "description": "SECRET EMPIRE TIE-IN! It's not easy living under a Hydra government. Especially when you accidentally sided with them. Yeah — Deadpool messed up pretty badly this time. PLUS: Deadpool vs. Agent Preston for the fate of Ellie!",
                    "modified": "2017-07-07T16:23:25-0400",
                    "isbn": "",
                    "upc": "75960608332903311",
                    "diamondCode": "MAY170786",
                    "ean": "",
                    "issn": "1946-9292",
                    "format": "Comic",
                    "pageCount": 32,
                    "textObjects": [
                        {
                            "type": "issue_solicit_text",
                            "language": "en-us",
                            "text": "SECRET EMPIRE TIE-IN! It's not easy living under a Hydra government. Especially when you accidentally sided with them. Yeah — Deadpool messed up pretty badly this time. PLUS: Deadpool vs. Agent Preston for the fate of Ellie!"
                        }
                    ],
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/60607",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/60607/deadpool_2015_33?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "purchase",
                            "url": "http://comicstore.marvel.com/Deadpool-33/digital-comic/45278?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "reader",
                            "url": "http://marvel.com/digitalcomics/view.htm?iid=45278&utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "inAppLink",
                            "url": "https://applink.marvel.com/issue/45278?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
                        "name": "Deadpool (2015 - 2017)"
                    },
                    "variants": [],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2017-07-12T00:00:00-0400"
                        },
                        {
                            "type": "focDate",
                            "date": "2017-06-19T00:00:00-0400"
                        },
                        {
                            "type": "unlimitedDate",
                            "date": "2018-01-15T00:00:00-0500"
                        },
                        {
                            "type": "digitalPurchaseDate",
                            "date": "2017-07-12T00:00:00-0400"
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 3.99
                        },
                        {
                            "type": "digitalPurchasePrice",
                            "price": 3.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/b0/595ea832381a7",
                        "extension": "jpg"
                    },
                    "images": [
                        {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/b0/595ea832381a7",
                            "extension": "jpg"
                        }
                    ],
                    "creators": {
                        "available": 9,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60607/creators",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                                "name": "Gerry Duggan",
                                "role": "writer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/942",
                                "name": "Mike Hawthorne",
                                "role": "penciler"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/9081",
                                "name": "Matteo Lolli",
                                "role": "penciler"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12392",
                                "name": "David Lopez",
                                "role": "penciler (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/1371",
                                "name": "Terry Pallot",
                                "role": "inker"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8230",
                                "name": "Christian Dalla Vecchia",
                                "role": "inker"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/13008",
                                "name": "Ruth Redmond",
                                "role": "colorist"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                                "name": "Vc Joe Sabino",
                                "role": "letterer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                                "name": "Jordan White",
                                "role": "editor"
                            }
                        ],
                        "returned": 9
                    },
                    "characters": {
                        "available": 1,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60607/characters",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                                "name": "Deadpool"
                            }
                        ],
                        "returned": 1
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60607/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131683",
                                "name": "cover from Deadpool (2015) #33",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131684",
                                "name": "story from Deadpool (2015) #33",
                                "type": "interiorStory"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 1,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60607/events",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
                                "name": "Secret Empire"
                            }
                        ],
                        "returned": 1
                    }
                },
                {
                    "id": 60606,
                    "digitalId": 43795,
                    "title": "Deadpool (2015) #32",
                    "issueNumber": 32,
                    "variantDescription": "",
                    "description": "SECRET EMPIRE TIE-IN! Who's the guy in Hydra green the chicks all call a sex machine? DEADPOOL! You're darned right. You know…I am starting to think he might be on the wrong side here.",
                    "modified": "2017-06-09T14:36:16-0400",
                    "isbn": "",
                    "upc": "75960608332903211",
                    "diamondCode": "APR170959",
                    "ean": "",
                    "issn": "1946-9292",
                    "format": "Comic",
                    "pageCount": 32,
                    "textObjects": [
                        {
                            "type": "issue_solicit_text",
                            "language": "en-us",
                            "text": "SECRET EMPIRE TIE-IN! Who's the guy in Hydra green the chicks all call a sex machine? DEADPOOL! You're darned right. You know…I am starting to think he might be on the wrong side here."
                        }
                    ],
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/60606",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/60606/deadpool_2015_32?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "purchase",
                            "url": "http://comicstore.marvel.com/Deadpool-32/digital-comic/43795?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "reader",
                            "url": "http://marvel.com/digitalcomics/view.htm?iid=43795&utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "inAppLink",
                            "url": "https://applink.marvel.com/issue/43795?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
                        "name": "Deadpool (2015 - 2017)"
                    },
                    "variants": [],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2017-06-14T00:00:00-0400"
                        },
                        {
                            "type": "focDate",
                            "date": "2017-05-22T00:00:00-0400"
                        },
                        {
                            "type": "unlimitedDate",
                            "date": "2017-12-18T00:00:00-0500"
                        },
                        {
                            "type": "digitalPurchaseDate",
                            "date": "2017-06-14T00:00:00-0400"
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 3.99
                        },
                        {
                            "type": "digitalPurchasePrice",
                            "price": 3.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/03/5939931e00a80",
                        "extension": "jpg"
                    },
                    "images": [
                        {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/03/5939931e00a80",
                            "extension": "jpg"
                        }
                    ],
                    "creators": {
                        "available": 7,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60606/creators",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                                "name": "Gerry Duggan",
                                "role": "writer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/9081",
                                "name": "Matteo Lolli",
                                "role": "penciler"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12392",
                                "name": "David Lopez",
                                "role": "penciler (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/13008",
                                "name": "Ruth Redmond",
                                "role": "colorist"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                                "name": "Vc Joe Sabino",
                                "role": "letterer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8230",
                                "name": "Christian Dalla Vecchia",
                                "role": "inker"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                                "name": "Jordan White",
                                "role": "editor"
                            }
                        ],
                        "returned": 7
                    },
                    "characters": {
                        "available": 1,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60606/characters",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                                "name": "Deadpool"
                            }
                        ],
                        "returned": 1
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60606/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131681",
                                "name": "cover from Deadpool (2015) #32",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131682",
                                "name": "story from Deadpool (2015) #32",
                                "type": "interiorStory"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60606/events",
                        "items": [],
                        "returned": 0
                    }
                },
                {
                    "id": 60605,
                    "digitalId": 44744,
                    "title": "Deadpool (2015) #31",
                    "issueNumber": 31,
                    "variantDescription": "",
                    "description": "SECRET EMPIRE TIE-IN! Deadpool trusts Steve Rogers implicitly. How could he not? Now, it’s time to put that trust to the test. The result will have serious ramifications for Deadpool in days to come.",
                    "modified": "2017-06-30T11:56:53-0400",
                    "isbn": "",
                    "upc": "75960608332903111",
                    "diamondCode": "MAR170928",
                    "ean": "",
                    "issn": "1946-9292",
                    "format": "Comic",
                    "pageCount": 32,
                    "textObjects": [
                        {
                            "type": "issue_solicit_text",
                            "language": "en-us",
                            "text": "SECRET EMPIRE TIE-IN! Deadpool trusts Steve Rogers implicitly. How could he not? Now, it’s time to put that trust to the test. The result will have serious ramifications for Deadpool in days to come."
                        }
                    ],
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/60605",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/60605/deadpool_2015_31?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "purchase",
                            "url": "http://comicstore.marvel.com/Deadpool-31/digital-comic/44744?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "reader",
                            "url": "http://marvel.com/digitalcomics/view.htm?iid=44744&utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "inAppLink",
                            "url": "https://applink.marvel.com/issue/44744?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
                        "name": "Deadpool (2015 - 2017)"
                    },
                    "variants": [],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2017-05-31T00:00:00-0400"
                        },
                        {
                            "type": "focDate",
                            "date": "2017-05-08T00:00:00-0400"
                        },
                        {
                            "type": "unlimitedDate",
                            "date": "2017-12-04T00:00:00-0500"
                        },
                        {
                            "type": "digitalPurchaseDate",
                            "date": "2017-05-31T00:00:00-0400"
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 3.99
                        },
                        {
                            "type": "digitalPurchasePrice",
                            "price": 3.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/a0/5925b49634242",
                        "extension": "jpg"
                    },
                    "images": [
                        {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/a0/5925b49634242",
                            "extension": "jpg"
                        }
                    ],
                    "creators": {
                        "available": 7,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60605/creators",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                                "name": "Gerry Duggan",
                                "role": "writer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/9081",
                                "name": "Matteo Lolli",
                                "role": "penciler"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12392",
                                "name": "David Lopez",
                                "role": "penciler (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/13008",
                                "name": "Ruth Redmond",
                                "role": "colorist"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                                "name": "Vc Joe Sabino",
                                "role": "letterer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8230",
                                "name": "Christian Dalla Vecchia",
                                "role": "inker"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                                "name": "Jordan White",
                                "role": "editor"
                            }
                        ],
                        "returned": 7
                    },
                    "characters": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60605/characters",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                                "name": "Captain America"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                                "name": "Deadpool"
                            }
                        ],
                        "returned": 2
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60605/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131679",
                                "name": "cover from Deadpool (2015) #31",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131680",
                                "name": "story from Deadpool (2015) #31",
                                "type": "interiorStory"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 1,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60605/events",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
                                "name": "Secret Empire"
                            }
                        ],
                        "returned": 1
                    }
                },
                {
                    "id": 60604,
                    "digitalId": 44743,
                    "title": "Deadpool (2015) #30",
                    "issueNumber": 30,
                    "variantDescription": "",
                    "description": "DEADPOOL GOES TO SPACE! Things aren’t great in Deadpool’s life recently, but he thinks he might know a solution…one found in the inky blackness of deepest, darkest outer space! Man, when Deadpool gets away from it all, he doesn’t fool around! This issue features ONE MASSIVE 80-PAGE STORY by Gerry Duggan and Mike Hawthorne taking Deadpool to the edge of the Marvel Cosmos and back! It’s practically an OGN! WE MUST BE OUT OF OUR MINDS!",
                    "modified": "2017-05-05T11:40:04-0400",
                    "isbn": "",
                    "upc": "75960608332903011",
                    "diamondCode": "MAR171095",
                    "ean": "",
                    "issn": "1946-9292",
                    "format": "Comic",
                    "pageCount": 96,
                    "textObjects": [
                        {
                            "type": "issue_solicit_text",
                            "language": "en-us",
                            "text": "DEADPOOL GOES TO SPACE! Things aren’t great in Deadpool’s life recently, but he thinks he might know a solution…one found in the inky blackness of deepest, darkest outer space! Man, when Deadpool gets away from it all, he doesn’t fool around! This issue features ONE MASSIVE 80-PAGE STORY by Gerry Duggan and Mike Hawthorne taking Deadpool to the edge of the Marvel Cosmos and back! It’s practically an OGN! WE MUST BE OUT OF OUR MINDS!"
                        }
                    ],
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/60604",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/60604/deadpool_2015_30?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "purchase",
                            "url": "http://comicstore.marvel.com/Deadpool-30/digital-comic/44743?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "reader",
                            "url": "http://marvel.com/digitalcomics/view.htm?iid=44743&utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "inAppLink",
                            "url": "https://applink.marvel.com/issue/44743?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
                        "name": "Deadpool (2015 - 2017)"
                    },
                    "variants": [],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2017-05-10T00:00:00-0400"
                        },
                        {
                            "type": "focDate",
                            "date": "2017-04-17T00:00:00-0400"
                        },
                        {
                            "type": "unlimitedDate",
                            "date": "2017-11-13T00:00:00-0500"
                        },
                        {
                            "type": "digitalPurchaseDate",
                            "date": "2017-05-10T00:00:00-0400"
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 9.99
                        },
                        {
                            "type": "digitalPurchasePrice",
                            "price": 9.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/f0/5908c086b7d55",
                        "extension": "jpg"
                    },
                    "images": [
                        {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/f0/5908c086b7d55",
                            "extension": "jpg"
                        }
                    ],
                    "creators": {
                        "available": 6,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60604/creators",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12989",
                                "name": "Jordie Bellaire",
                                "role": "colorist (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                                "name": "Gerry Duggan",
                                "role": "writer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/942",
                                "name": "Mike Hawthorne",
                                "role": "penciler (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/1371",
                                "name": "Terry Pallot",
                                "role": "inker"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                                "name": "Vc Joe Sabino",
                                "role": "letterer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                                "name": "Jordan White",
                                "role": "editor"
                            }
                        ],
                        "returned": 6
                    },
                    "characters": {
                        "available": 1,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60604/characters",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                                "name": "Deadpool"
                            }
                        ],
                        "returned": 1
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60604/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131677",
                                "name": "cover from Deadpool (2015) #30",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131678",
                                "name": "story from Deadpool (2015) #30",
                                "type": "interiorStory"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60604/events",
                        "items": [],
                        "returned": 0
                    }
                },
                {
                    "id": 60603,
                    "digitalId": 44523,
                    "title": "Deadpool (2015) #29",
                    "issueNumber": 29,
                    "variantDescription": "",
                    "description": "\"TIL DEATH DO US\" Part 6 (of 6). Is this the end of Deadpool's marriage?",
                    "modified": "2017-04-14T13:08:39-0400",
                    "isbn": "",
                    "upc": "75960608332902911",
                    "diamondCode": "FEB170926",
                    "ean": "",
                    "issn": "1946-9292",
                    "format": "Comic",
                    "pageCount": 32,
                    "textObjects": [
                        {
                            "type": "issue_solicit_text",
                            "language": "en-us",
                            "text": "\"TIL DEATH DO US\" Part 6 (of 6). Is this the end of Deadpool's marriage?"
                        }
                    ],
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/60603",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/60603/deadpool_2015_29?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "purchase",
                            "url": "http://comicstore.marvel.com/Deadpool-29/digital-comic/44523?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "reader",
                            "url": "http://marvel.com/digitalcomics/view.htm?iid=44523&utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "inAppLink",
                            "url": "https://applink.marvel.com/issue/44523?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
                        "name": "Deadpool (2015 - 2017)"
                    },
                    "variants": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/63684",
                            "name": "Deadpool (2015) #29 (Deodato Resurrxion Variant)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/63064",
                            "name": "Deadpool (2015) #29 (Albuquerque Poster Variant)"
                        }
                    ],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2017-04-19T00:00:00-0400"
                        },
                        {
                            "type": "focDate",
                            "date": "2017-03-27T00:00:00-0400"
                        },
                        {
                            "type": "unlimitedDate",
                            "date": "2017-10-23T00:00:00-0400"
                        },
                        {
                            "type": "digitalPurchaseDate",
                            "date": "2017-04-19T00:00:00-0400"
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 3.99
                        },
                        {
                            "type": "digitalPurchasePrice",
                            "price": 3.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/90/58ee71d3eddad",
                        "extension": "jpg"
                    },
                    "images": [
                        {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/90/58ee71d3eddad",
                            "extension": "jpg"
                        }
                    ],
                    "creators": {
                        "available": 7,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60603/creators",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/665",
                                "name": "Reilly Brown",
                                "role": "inker (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/9937",
                                "name": "Jim Charalampidis",
                                "role": "colorist (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                                "name": "Gerry Duggan",
                                "role": "writer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/9394",
                                "name": "Salvador Espin",
                                "role": "inker"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/13008",
                                "name": "Ruth Redmond",
                                "role": "colorist"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                                "name": "Vc Joe Sabino",
                                "role": "letterer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                                "name": "Jordan White",
                                "role": "editor"
                            }
                        ],
                        "returned": 7
                    },
                    "characters": {
                        "available": 1,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60603/characters",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                                "name": "Deadpool"
                            }
                        ],
                        "returned": 1
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60603/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131675",
                                "name": "cover from Deadpool (2015) #29",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131676",
                                "name": "story from Deadpool (2015) #29",
                                "type": "interiorStory"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60603/events",
                        "items": [],
                        "returned": 0
                    }
                },
                {
                    "id": 63064,
                    "digitalId": 0,
                    "title": "Deadpool (2015) #29 (Albuquerque Poster Variant)",
                    "issueNumber": 29,
                    "variantDescription": "Albuquerque Poster Variant",
                    "description": null,
                    "modified": "2017-04-12T11:14:13-0400",
                    "isbn": "",
                    "upc": "75960608332902921",
                    "diamondCode": "FEB170927",
                    "ean": "",
                    "issn": "1946-9292",
                    "format": "Comic",
                    "pageCount": 32,
                    "textObjects": [],
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/63064",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/63064/deadpool_2015_29_albuquerque_poster_variant/albuquerque_poster_variant?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
                        "name": "Deadpool (2015 - 2017)"
                    },
                    "variants": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/60603",
                            "name": "Deadpool (2015) #29"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/63684",
                            "name": "Deadpool (2015) #29 (Deodato Resurrxion Variant)"
                        }
                    ],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2017-04-19T00:00:00-0400"
                        },
                        {
                            "type": "focDate",
                            "date": "2017-03-27T00:00:00-0400"
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 3.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                        "extension": "jpg"
                    },
                    "images": [],
                    "creators": {
                        "available": 5,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/63064/creators",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                                "name": "Gerry Duggan",
                                "role": "writer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/9394",
                                "name": "Salvador Espin",
                                "role": "inker"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/13008",
                                "name": "Ruth Redmond",
                                "role": "colorist"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                                "name": "Vc Joe Sabino",
                                "role": "letterer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                                "name": "Jordan White",
                                "role": "editor"
                            }
                        ],
                        "returned": 5
                    },
                    "characters": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/63064/characters",
                        "items": [],
                        "returned": 0
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/63064/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/137029",
                                "name": "cover from Deadpool (2015) #29 (ALBUQUERQUE POSTER VARIANT)",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/137030",
                                "name": "story from Deadpool (2015) #29 (ALBUQUERQUE POSTER VARIANT)",
                                "type": "interiorStory"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/63064/events",
                        "items": [],
                        "returned": 0
                    }
                },
                {
                    "id": 63684,
                    "digitalId": 0,
                    "title": "Deadpool (2015) #29 (Deodato Resurrxion Variant)",
                    "issueNumber": 29,
                    "variantDescription": "Deodato Resurrxion Variant",
                    "description": null,
                    "modified": "2017-04-12T11:14:54-0400",
                    "isbn": "",
                    "upc": "75960608332902931",
                    "diamondCode": "FEB170928",
                    "ean": "",
                    "issn": "1946-9292",
                    "format": "Comic",
                    "pageCount": 32,
                    "textObjects": [],
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/63684",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/63684/deadpool_2015_29_deodato_resurrxion_variant/deodato_resurrxion_variant?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
                        "name": "Deadpool (2015 - 2017)"
                    },
                    "variants": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/60603",
                            "name": "Deadpool (2015) #29"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/63064",
                            "name": "Deadpool (2015) #29 (Albuquerque Poster Variant)"
                        }
                    ],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2017-04-19T00:00:00-0400"
                        },
                        {
                            "type": "focDate",
                            "date": "2017-03-27T00:00:00-0400"
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 3.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                        "extension": "jpg"
                    },
                    "images": [],
                    "creators": {
                        "available": 7,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/63684/creators",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/520",
                                "name": "Rainier Beredo",
                                "role": "colorist (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/312",
                                "name": "Mike Deodato",
                                "role": "penciler (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                                "name": "Gerry Duggan",
                                "role": "writer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/9394",
                                "name": "Salvador Espin",
                                "role": "inker"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/13008",
                                "name": "Ruth Redmond",
                                "role": "colorist"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                                "name": "Vc Joe Sabino",
                                "role": "letterer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                                "name": "Jordan White",
                                "role": "editor"
                            }
                        ],
                        "returned": 7
                    },
                    "characters": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/63684/characters",
                        "items": [],
                        "returned": 0
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/63684/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/138311",
                                "name": "cover from Deadpool (2015) #29 (DEODATO RESURRXION VARIANT)",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/138312",
                                "name": "story from Deadpool (2015) #29 (DEODATO RESURRXION VARIANT)",
                                "type": "interiorStory"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/63684/events",
                        "items": [],
                        "returned": 0
                    }
                },
                {
                    "id": 60602,
                    "digitalId": 44277,
                    "title": "Deadpool (2015) #28",
                    "issueNumber": 28,
                    "variantDescription": "",
                    "description": "Deadpool's whirlwind romance with Shiklah was one of the most exciting times of his life. Traveling across the world, fighting all sorts of threats at her side, and finally marrying her as a way to thwart the evil vampire lord, Dracula. But since then, the reality has set in. Shiklah is a demon succubus, and more than that, the Queen of the monster kingdom hidden beneath Manhattan...and the problems between them continue to pile up.\nNow, when an affront to Shiklah's people demands justice, a line is crossed. As the Monster Metropolis declares war on the surface world, Deadpool must choose between the wife to whom he's pledged himself and the role he's been crafting for himself as a hero. Also featuring Spider-Man and the Mercs for Money, this is one domestic dispute that's really going to break some things up.",
                    "modified": "2017-03-16T09:16:59-0400",
                    "isbn": "",
                    "upc": "75960608332902811",
                    "diamondCode": "JAN171058",
                    "ean": "",
                    "issn": "1946-9292",
                    "format": "Comic",
                    "pageCount": 32,
                    "textObjects": [
                        {
                            "type": "issue_solicit_text",
                            "language": "en-us",
                            "text": "Deadpool's whirlwind romance with Shiklah was one of the most exciting times of his life. Traveling across the world, fighting all sorts of threats at her side, and finally marrying her as a way to thwart the evil vampire lord, Dracula. But since then, the reality has set in. Shiklah is a demon succubus, and more than that, the Queen of the monster kingdom hidden beneath Manhattan...and the problems between them continue to pile up.\nNow, when an affront to Shiklah's people demands justice, a line is crossed. As the Monster Metropolis declares war on the surface world, Deadpool must choose between the wife to whom he's pledged himself and the role he's been crafting for himself as a hero. Also featuring Spider-Man and the Mercs for Money, this is one domestic dispute that's really going to break some things up."
                        }
                    ],
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/60602",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/60602/deadpool_2015_28?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "purchase",
                            "url": "http://comicstore.marvel.com/Deadpool-28/digital-comic/44277?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "reader",
                            "url": "http://marvel.com/digitalcomics/view.htm?iid=44277&utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "inAppLink",
                            "url": "https://applink.marvel.com/issue/44277?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
                        "name": "Deadpool (2015 - 2017)"
                    },
                    "variants": [],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2017-03-01T00:00:00-0500"
                        },
                        {
                            "type": "focDate",
                            "date": "2017-02-06T00:00:00-0500"
                        },
                        {
                            "type": "unlimitedDate",
                            "date": "2017-09-04T00:00:00-0400"
                        },
                        {
                            "type": "digitalPurchaseDate",
                            "date": "2017-03-01T00:00:00-0500"
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 3.99
                        },
                        {
                            "type": "digitalPurchasePrice",
                            "price": 3.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/70/58b0a1463b05a",
                        "extension": "jpg"
                    },
                    "images": [
                        {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/70/58b0a1463b05a",
                            "extension": "jpg"
                        }
                    ],
                    "creators": {
                        "available": 5,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60602/creators",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/665",
                                "name": "Reilly Brown",
                                "role": "penciller (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                                "name": "Gerry Duggan",
                                "role": "writer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/9394",
                                "name": "Salvador Espin",
                                "role": "penciller"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
                                "name": "Vc Joe Sabino",
                                "role": "letterer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                                "name": "Jordan White",
                                "role": "editor"
                            }
                        ],
                        "returned": 5
                    },
                    "characters": {
                        "available": 1,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60602/characters",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                                "name": "Deadpool"
                            }
                        ],
                        "returned": 1
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60602/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131673",
                                "name": "cover from Deadpool (2015) #28",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131674",
                                "name": "story from Deadpool (2015) #28",
                                "type": "interiorStory"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60602/events",
                        "items": [],
                        "returned": 0
                    }
                },
                {
                    "id": 60601,
                    "digitalId": 44083,
                    "title": "Deadpool (2015) #27",
                    "issueNumber": 27,
                    "variantDescription": "",
                    "description": "Steve Rogers is Captain America, the bastion of all that is good. He’s the kind of paragon who Deadpool could really take a lesson from. I’m not caught up on his recent comics, but I can’t imagine anything could change that.",
                    "modified": "2017-02-10T11:01:40-0500",
                    "isbn": "",
                    "upc": "75960608332902711",
                    "diamondCode": "",
                    "ean": "",
                    "issn": "",
                    "format": "Comic",
                    "pageCount": 32,
                    "textObjects": [
                        {
                            "type": "issue_solicit_text",
                            "language": "en-us",
                            "text": "Steve Rogers is Captain America, the bastion of all that is good. He’s the kind of paragon who Deadpool could really take a lesson from. I’m not caught up on his recent comics, but I can’t imagine anything could change that."
                        }
                    ],
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/60601",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/60601/deadpool_2015_27?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "purchase",
                            "url": "http://comicstore.marvel.com/Deadpool-27/digital-comic/44083?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "reader",
                            "url": "http://marvel.com/digitalcomics/view.htm?iid=44083&utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "inAppLink",
                            "url": "https://applink.marvel.com/issue/44083?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
                        "name": "Deadpool (2015 - 2017)"
                    },
                    "variants": [],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2017-02-15T00:00:00-0500"
                        },
                        {
                            "type": "focDate",
                            "date": "2017-01-25T00:00:00-0500"
                        },
                        {
                            "type": "unlimitedDate",
                            "date": "2017-08-21T00:00:00-0400"
                        },
                        {
                            "type": "digitalPurchaseDate",
                            "date": "2017-02-15T00:00:00-0500"
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 3.99
                        },
                        {
                            "type": "digitalPurchasePrice",
                            "price": 3.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/50/589a44b869b73",
                        "extension": "jpg"
                    },
                    "images": [
                        {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/50/589a44b869b73",
                            "extension": "jpg"
                        }
                    ],
                    "creators": {
                        "available": 4,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60601/creators",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                                "name": "Gerry Duggan",
                                "role": "writer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12298",
                                "name": "Scott Hepburn",
                                "role": "penciller"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12392",
                                "name": "David Lopez",
                                "role": "penciller (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                                "name": "Jordan White",
                                "role": "editor"
                            }
                        ],
                        "returned": 4
                    },
                    "characters": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60601/characters",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
                                "name": "Captain America"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                                "name": "Deadpool"
                            }
                        ],
                        "returned": 2
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60601/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131671",
                                "name": "cover from Deadpool (2015) #27",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131672",
                                "name": "story from Deadpool (2015) #27",
                                "type": "interiorStory"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60601/events",
                        "items": [],
                        "returned": 0
                    }
                },
                {
                    "id": 60600,
                    "digitalId": 44038,
                    "title": "Deadpool (2015) #26",
                    "issueNumber": 26,
                    "variantDescription": "",
                    "description": "It’s February, so Love is in the air! So of course, we’re guest-starring the one character no one can kiss! That’s right: Rogue is stopping by for an adventure!",
                    "modified": "2017-01-27T18:10:17-0500",
                    "isbn": "",
                    "upc": "75960608332902611",
                    "diamondCode": "",
                    "ean": "",
                    "issn": "",
                    "format": "Comic",
                    "pageCount": 32,
                    "textObjects": [
                        {
                            "type": "issue_solicit_text",
                            "language": "en-us",
                            "text": "It’s February, so Love is in the air! So of course, we’re guest-starring the one character no one can kiss! That’s right: Rogue is stopping by for an adventure!"
                        }
                    ],
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/60600",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/60600/deadpool_2015_26?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "purchase",
                            "url": "http://comicstore.marvel.com/Deadpool-26/digital-comic/44038?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "reader",
                            "url": "http://marvel.com/digitalcomics/view.htm?iid=44038&utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "inAppLink",
                            "url": "https://applink.marvel.com/issue/44038?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
                        "name": "Deadpool (2015 - 2017)"
                    },
                    "variants": [],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2017-02-01T00:00:00-0500"
                        },
                        {
                            "type": "focDate",
                            "date": "2017-01-09T00:00:00-0500"
                        },
                        {
                            "type": "unlimitedDate",
                            "date": "2017-08-07T00:00:00-0400"
                        },
                        {
                            "type": "digitalPurchaseDate",
                            "date": "2017-02-01T00:00:00-0500"
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 3.99
                        },
                        {
                            "type": "digitalPurchasePrice",
                            "price": 3.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/c0/588b7090570ec",
                        "extension": "jpg"
                    },
                    "images": [
                        {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/c0/588b7090570ec",
                            "extension": "jpg"
                        }
                    ],
                    "creators": {
                        "available": 4,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60600/creators",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                                "name": "Gerry Duggan",
                                "role": "writer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12298",
                                "name": "Scott Hepburn",
                                "role": "penciller"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12392",
                                "name": "David Lopez",
                                "role": "penciller (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                                "name": "Jordan White",
                                "role": "editor"
                            }
                        ],
                        "returned": 4
                    },
                    "characters": {
                        "available": 1,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60600/characters",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                                "name": "Deadpool"
                            }
                        ],
                        "returned": 1
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60600/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131669",
                                "name": "cover from Deadpool (2015) #26",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131670",
                                "name": "story from Deadpool (2015) #26",
                                "type": "interiorStory"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60600/events",
                        "items": [],
                        "returned": 0
                    }
                },
                {
                    "id": 60599,
                    "digitalId": 43799,
                    "title": "Deadpool (2015) #25",
                    "issueNumber": 25,
                    "variantDescription": "",
                    "description": "DEADPOOL 2099 reaches its DOUBLE-SIZED CONCLUSION! Wade’s two daughters battle for his legacy! PLUS: The old man himself gets in the game! AND: IRON FIST shows just how IMMORTAL he is!",
                    "modified": "2017-01-18T11:46:43-0500",
                    "isbn": "",
                    "upc": "75960608332902511",
                    "diamondCode": "",
                    "ean": "",
                    "issn": "",
                    "format": "Comic",
                    "pageCount": 48,
                    "textObjects": [
                        {
                            "type": "issue_solicit_text",
                            "language": "en-us",
                            "text": "DEADPOOL 2099 reaches its DOUBLE-SIZED CONCLUSION! Wade’s two daughters battle for his legacy! PLUS: The old man himself gets in the game! AND: IRON FIST shows just how IMMORTAL he is!"
                        }
                    ],
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/60599",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/60599/deadpool_2015_25?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "purchase",
                            "url": "http://comicstore.marvel.com/Deadpool-25/digital-comic/43799?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "reader",
                            "url": "http://marvel.com/digitalcomics/view.htm?iid=43799&utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "inAppLink",
                            "url": "https://applink.marvel.com/issue/43799?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
                        "name": "Deadpool (2015 - 2017)"
                    },
                    "variants": [],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2017-01-25T00:00:00-0500"
                        },
                        {
                            "type": "focDate",
                            "date": "2016-12-19T00:00:00-0500"
                        },
                        {
                            "type": "unlimitedDate",
                            "date": "2017-07-31T00:00:00-0400"
                        },
                        {
                            "type": "digitalPurchaseDate",
                            "date": "2017-01-25T00:00:00-0500"
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 5.99
                        },
                        {
                            "type": "digitalPurchasePrice",
                            "price": 5.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/90/5878fbfee568a",
                        "extension": "jpg"
                    },
                    "images": [
                        {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/90/5878fbfee568a",
                            "extension": "jpg"
                        }
                    ],
                    "creators": {
                        "available": 3,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60599/creators",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                                "name": "Gerry Duggan",
                                "role": "writer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/486",
                                "name": "Scott Koblish",
                                "role": "penciller (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                                "name": "Jordan White",
                                "role": "editor"
                            }
                        ],
                        "returned": 3
                    },
                    "characters": {
                        "available": 1,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60599/characters",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                                "name": "Deadpool"
                            }
                        ],
                        "returned": 1
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60599/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131667",
                                "name": "cover from Deadpool (2015) #25",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131668",
                                "name": "story from Deadpool (2015) #25",
                                "type": "interiorStory"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60599/events",
                        "items": [],
                        "returned": 0
                    }
                },
                {
                    "id": 60598,
                    "digitalId": 43794,
                    "title": "Deadpool (2015) #24",
                    "issueNumber": 24,
                    "variantDescription": "",
                    "description": "“PATIENCE: ZERO” comes to an end! Will Wade make a deal with the devil to save a loved one? Surely no Marvel hero would do such a thing!",
                    "modified": "2017-01-05T16:54:11-0500",
                    "isbn": "",
                    "upc": "75960608332902411",
                    "diamondCode": "",
                    "ean": "",
                    "issn": "",
                    "format": "Comic",
                    "pageCount": 32,
                    "textObjects": [
                        {
                            "type": "issue_solicit_text",
                            "language": "en-us",
                            "text": "“PATIENCE: ZERO” comes to an end! Will Wade make a deal with the devil to save a loved one? Surely no Marvel hero would do such a thing!"
                        }
                    ],
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/60598",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/60598/deadpool_2015_24?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "purchase",
                            "url": "http://comicstore.marvel.com/Deadpool-24/digital-comic/43794?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "reader",
                            "url": "http://marvel.com/digitalcomics/view.htm?iid=43794&utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "inAppLink",
                            "url": "https://applink.marvel.com/issue/43794?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
                        "name": "Deadpool (2015 - 2017)"
                    },
                    "variants": [],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2017-01-11T00:00:00-0500"
                        },
                        {
                            "type": "focDate",
                            "date": "2016-12-12T00:00:00-0500"
                        },
                        {
                            "type": "unlimitedDate",
                            "date": "2017-07-17T00:00:00-0400"
                        },
                        {
                            "type": "digitalPurchaseDate",
                            "date": "2017-01-11T00:00:00-0500"
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 3.99
                        },
                        {
                            "type": "digitalPurchasePrice",
                            "price": 3.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/c0/586eb66144a83",
                        "extension": "jpg"
                    },
                    "images": [
                        {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/c0/586eb66144a83",
                            "extension": "jpg"
                        }
                    ],
                    "creators": {
                        "available": 4,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60598/creators",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                                "name": "Gerry Duggan",
                                "role": "writer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/9081",
                                "name": "Matteo Lolli",
                                "role": "penciller"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11930",
                                "name": "Tradd Moore",
                                "role": "penciller (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                                "name": "Jordan White",
                                "role": "editor"
                            }
                        ],
                        "returned": 4
                    },
                    "characters": {
                        "available": 1,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60598/characters",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                                "name": "Deadpool"
                            }
                        ],
                        "returned": 1
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60598/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131665",
                                "name": "cover from Deadpool (2015) #24",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131666",
                                "name": "story from Deadpool (2015) #24",
                                "type": "interiorStory"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60598/events",
                        "items": [],
                        "returned": 0
                    }
                },
                {
                    "id": 60597,
                    "digitalId": 43414,
                    "title": "Deadpool (2015) #23",
                    "issueNumber": 23,
                    "variantDescription": "",
                    "description": "Madcap’s web of revenge tightens around Deadpool…Deadpool takes matters into his own hands. TIME TO GET EVEN WITH THE EVEN GETTING.",
                    "modified": "2016-11-30T10:46:45-0500",
                    "isbn": "",
                    "upc": "75960608332902311",
                    "diamondCode": "",
                    "ean": "",
                    "issn": "",
                    "format": "Comic",
                    "pageCount": 32,
                    "textObjects": [
                        {
                            "type": "issue_solicit_text",
                            "language": "en-us",
                            "text": "Madcap’s web of revenge tightens around Deadpool…Deadpool takes matters into his own hands. TIME TO GET EVEN WITH THE EVEN GETTING."
                        }
                    ],
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/60597",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/60597/deadpool_2015_23?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "purchase",
                            "url": "http://comicstore.marvel.com/Deadpool-23/digital-comic/43414?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "reader",
                            "url": "http://marvel.com/digitalcomics/view.htm?iid=43414&utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "inAppLink",
                            "url": "https://applink.marvel.com/issue/43414?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
                        "name": "Deadpool (2015 - 2017)"
                    },
                    "variants": [],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2016-12-07T00:00:00-0500"
                        },
                        {
                            "type": "focDate",
                            "date": "2016-11-23T00:00:00-0500"
                        },
                        {
                            "type": "unlimitedDate",
                            "date": "2017-06-12T00:00:00-0400"
                        },
                        {
                            "type": "digitalPurchaseDate",
                            "date": "2016-12-07T00:00:00-0500"
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 3.99
                        },
                        {
                            "type": "digitalPurchasePrice",
                            "price": 3.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/03/583d9f6423102",
                        "extension": "jpg"
                    },
                    "images": [
                        {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/03/583d9f6423102",
                            "extension": "jpg"
                        }
                    ],
                    "creators": {
                        "available": 4,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60597/creators",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                                "name": "Gerry Duggan",
                                "role": "writer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/9081",
                                "name": "Matteo Lolli",
                                "role": "penciller"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11930",
                                "name": "Tradd Moore",
                                "role": "penciller (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                                "name": "Jordan White",
                                "role": "editor"
                            }
                        ],
                        "returned": 4
                    },
                    "characters": {
                        "available": 1,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60597/characters",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                                "name": "Deadpool"
                            }
                        ],
                        "returned": 1
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60597/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131663",
                                "name": "cover from Deadpool (2015) #23",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131664",
                                "name": "story from Deadpool (2015) #23",
                                "type": "interiorStory"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60597/events",
                        "items": [],
                        "returned": 0
                    }
                },
                {
                    "id": 60596,
                    "digitalId": 43219,
                    "title": "Deadpool (2015) #22",
                    "issueNumber": 22,
                    "variantDescription": "",
                    "description": "Has Madcap finally orchestrated the perfect revenge on Deadpool? Has he really found a way to kill Wade once and for all? Or…could it actually be WORSE than that?",
                    "modified": "2016-11-08T12:38:36-0500",
                    "isbn": "",
                    "upc": "75960608332902211",
                    "diamondCode": "",
                    "ean": "",
                    "issn": "",
                    "format": "Comic",
                    "pageCount": 32,
                    "textObjects": [
                        {
                            "type": "issue_solicit_text",
                            "language": "en-us",
                            "text": "Has Madcap finally orchestrated the perfect revenge on Deadpool? Has he really found a way to kill Wade once and for all? Or…could it actually be WORSE than that?"
                        }
                    ],
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/60596",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/60596/deadpool_2015_22?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "purchase",
                            "url": "http://comicstore.marvel.com/Deadpool-22/digital-comic/43219?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "reader",
                            "url": "http://marvel.com/digitalcomics/view.htm?iid=43219&utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "inAppLink",
                            "url": "https://applink.marvel.com/issue/43219?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
                        "name": "Deadpool (2015 - 2017)"
                    },
                    "variants": [],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2016-11-16T00:00:00-0500"
                        },
                        {
                            "type": "focDate",
                            "date": "2016-10-26T00:00:00-0400"
                        },
                        {
                            "type": "unlimitedDate",
                            "date": "2017-05-22T00:00:00-0400"
                        },
                        {
                            "type": "digitalPurchaseDate",
                            "date": "2016-11-16T00:00:00-0500"
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 3.99
                        },
                        {
                            "type": "digitalPurchasePrice",
                            "price": 3.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/00/58176c9ad35f5",
                        "extension": "jpg"
                    },
                    "images": [
                        {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/00/58176c9ad35f5",
                            "extension": "jpg"
                        }
                    ],
                    "creators": {
                        "available": 4,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60596/creators",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                                "name": "Gerry Duggan",
                                "role": "writer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/9081",
                                "name": "Matteo Lolli",
                                "role": "penciller"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11930",
                                "name": "Tradd Moore",
                                "role": "penciller (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                                "name": "Jordan White",
                                "role": "editor"
                            }
                        ],
                        "returned": 4
                    },
                    "characters": {
                        "available": 1,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60596/characters",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                                "name": "Deadpool"
                            }
                        ],
                        "returned": 1
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60596/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131661",
                                "name": "cover from Deadpool (2015) #22",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131662",
                                "name": "story from Deadpool (2015) #22",
                                "type": "interiorStory"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60596/events",
                        "items": [],
                        "returned": 0
                    }
                },
                {
                    "id": 61145,
                    "digitalId": 0,
                    "title": "Deadpool (2015) #21 (Koblish Secret Comic Variant)",
                    "issueNumber": 21,
                    "variantDescription": "Koblish Secret Comic Variant",
                    "description": null,
                    "modified": "2016-10-17T14:37:31-0400",
                    "isbn": "",
                    "upc": "75960608332902121",
                    "diamondCode": "",
                    "ean": "",
                    "issn": "",
                    "format": "Comic",
                    "pageCount": 96,
                    "textObjects": [],
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/61145",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/61145/deadpool_2015_21_koblish_secret_comic_variant/koblish_secret_comic_variant?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
                        "name": "Deadpool (2015 - 2017)"
                    },
                    "variants": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/61778",
                            "name": "Deadpool (2015) #21 (Mayhew Shakespeare Variant)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/61870",
                            "name": "Deadpool (2015) #21 (Sliney Champions Variant)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/60595",
                            "name": "Deadpool (2015) #21"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/61945",
                            "name": "Deadpool (2015) #21 (Janet Lee Variant)"
                        }
                    ],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2016-10-26T00:00:00-0400"
                        },
                        {
                            "type": "focDate",
                            "date": "2016-10-12T00:00:00-0400"
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 9.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                        "extension": "jpg"
                    },
                    "images": [],
                    "creators": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/61145/creators",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/486",
                                "name": "Scott Koblish",
                                "role": "penciller (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                                "name": "Jordan White",
                                "role": "editor"
                            }
                        ],
                        "returned": 2
                    },
                    "characters": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/61145/characters",
                        "items": [],
                        "returned": 0
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/61145/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/132733",
                                "name": "cover from Deadpool (2015) #21 (KOBLISH SECRET COMIC VARIANT)",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/132734",
                                "name": "story from Deadpool (2015) #21 (KOBLISH SECRET COMIC VARIANT)",
                                "type": "interiorStory"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/61145/events",
                        "items": [],
                        "returned": 0
                    }
                },
                {
                    "id": 61778,
                    "digitalId": 0,
                    "title": "Deadpool (2015) #21 (Mayhew Shakespeare Variant)",
                    "issueNumber": 21,
                    "variantDescription": "Mayhew Shakespeare Variant",
                    "description": null,
                    "modified": "2016-10-18T12:56:36-0400",
                    "isbn": "",
                    "upc": "75960608332902131",
                    "diamondCode": "",
                    "ean": "",
                    "issn": "",
                    "format": "Comic",
                    "pageCount": 96,
                    "textObjects": [],
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/61778",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/61778/deadpool_2015_21_mayhew_shakespeare_variant/mayhew_shakespeare_variant?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
                        "name": "Deadpool (2015 - 2017)"
                    },
                    "variants": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/60595",
                            "name": "Deadpool (2015) #21"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/61145",
                            "name": "Deadpool (2015) #21 (Koblish Secret Comic Variant)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/61945",
                            "name": "Deadpool (2015) #21 (Janet Lee Variant)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/61870",
                            "name": "Deadpool (2015) #21 (Sliney Champions Variant)"
                        }
                    ],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2016-10-26T00:00:00-0400"
                        },
                        {
                            "type": "focDate",
                            "date": "2016-10-12T00:00:00-0400"
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 9.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/57926ef900b10",
                        "extension": "jpg"
                    },
                    "images": [
                        {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/57926ef900b10",
                            "extension": "jpg"
                        }
                    ],
                    "creators": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/61778/creators",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/243",
                                "name": "Mike Mayhew",
                                "role": "penciller (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                                "name": "Jordan White",
                                "role": "editor"
                            }
                        ],
                        "returned": 2
                    },
                    "characters": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/61778/characters",
                        "items": [],
                        "returned": 0
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/61778/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/133995",
                                "name": "cover from Deadpool (2015) #21 (TBD ARTIST SHAKESPEARE VARIANT)",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/133996",
                                "name": "story from Deadpool (2015) #21 (TBD ARTIST SHAKESPEARE VARIANT)",
                                "type": "interiorStory"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/61778/events",
                        "items": [],
                        "returned": 0
                    }
                },
                {
                    "id": 60595,
                    "digitalId": 42925,
                    "title": "Deadpool (2015) #21",
                    "issueNumber": 21,
                    "variantDescription": "",
                    "description": "“IT’S NOT A TUMOR” STARTS NOW!\nYou can’t keep a good Madcap down! First, this massively oversized issue brings you the return of Deadpool’s greatest nemesis. He’s back (in the most horrific way possible) and he’s out for revenge! Then, say hello to SHAKESPOOL, THE MERCENARY OF VENICE as Deadpool goes Shakespeare for an all-new 60-page tale by Ian Doescher (William Shakespeare’s Star Wars series). Those old plays you were supposed to read in English class just got a lot more interesting. Don’t say we never taught you anything!",
                    "modified": "2016-10-18T12:50:19-0400",
                    "isbn": "",
                    "upc": "75960608332902111",
                    "diamondCode": "",
                    "ean": "",
                    "issn": "",
                    "format": "Comic",
                    "pageCount": 96,
                    "textObjects": [
                        {
                            "type": "issue_solicit_text",
                            "language": "en-us",
                            "text": "“IT’S NOT A TUMOR” STARTS NOW!\nYou can’t keep a good Madcap down! First, this massively oversized issue brings you the return of Deadpool’s greatest nemesis. He’s back (in the most horrific way possible) and he’s out for revenge! Then, say hello to SHAKESPOOL, THE MERCENARY OF VENICE as Deadpool goes Shakespeare for an all-new 60-page tale by Ian Doescher (William Shakespeare’s Star Wars series). Those old plays you were supposed to read in English class just got a lot more interesting. Don’t say we never taught you anything!"
                        }
                    ],
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/60595",
                    "urls": [
                        {
                            "type": "detail",
                            "url": "http://marvel.com/comics/issue/60595/deadpool_2015_21?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "purchase",
                            "url": "http://comicstore.marvel.com/Deadpool-21/digital-comic/42925?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "reader",
                            "url": "http://marvel.com/digitalcomics/view.htm?iid=42925&utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        },
                        {
                            "type": "inAppLink",
                            "url": "https://applink.marvel.com/issue/42925?utm_campaign=apiRef&utm_source=12077ea809e2bf0e7f6571f01e2e0765"
                        }
                    ],
                    "series": {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
                        "name": "Deadpool (2015 - 2017)"
                    },
                    "variants": [
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/61145",
                            "name": "Deadpool (2015) #21 (Koblish Secret Comic Variant)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/61945",
                            "name": "Deadpool (2015) #21 (Janet Lee Variant)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/61778",
                            "name": "Deadpool (2015) #21 (Mayhew Shakespeare Variant)"
                        },
                        {
                            "resourceURI": "http://gateway.marvel.com/v1/public/comics/61870",
                            "name": "Deadpool (2015) #21 (Sliney Champions Variant)"
                        }
                    ],
                    "collections": [],
                    "collectedIssues": [],
                    "dates": [
                        {
                            "type": "onsaleDate",
                            "date": "2016-10-26T00:00:00-0400"
                        },
                        {
                            "type": "focDate",
                            "date": "2016-10-12T00:00:00-0400"
                        },
                        {
                            "type": "unlimitedDate",
                            "date": "2017-05-01T00:00:00-0400"
                        },
                        {
                            "type": "digitalPurchaseDate",
                            "date": "2016-10-26T00:00:00-0400"
                        }
                    ],
                    "prices": [
                        {
                            "type": "printPrice",
                            "price": 9.99
                        },
                        {
                            "type": "digitalPurchasePrice",
                            "price": 9.99
                        }
                    ],
                    "thumbnail": {
                        "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/58010cfab79f2",
                        "extension": "jpg"
                    },
                    "images": [
                        {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/58010cfab79f2",
                            "extension": "jpg"
                        }
                    ],
                    "creators": {
                        "available": 6,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60595/creators",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11401",
                                "name": "various",
                                "role": "penciller"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/9081",
                                "name": "Matteo Lolli",
                                "role": "penciller"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/12880",
                                "name": "IAN DOESCHER",
                                "role": "writer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                                "name": "Gerry Duggan",
                                "role": "writer"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/942",
                                "name": "Mike Hawthorne",
                                "role": "penciller (cover)"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                                "name": "Jordan White",
                                "role": "editor"
                            }
                        ],
                        "returned": 6
                    },
                    "characters": {
                        "available": 1,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60595/characters",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
                                "name": "Deadpool"
                            }
                        ],
                        "returned": 1
                    },
                    "stories": {
                        "available": 2,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60595/stories",
                        "items": [
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131659",
                                "name": "cover from Deadpool (2015) #21",
                                "type": "cover"
                            },
                            {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/131660",
                                "name": "story from Deadpool (2015) #21",
                                "type": "interiorStory"
                            }
                        ],
                        "returned": 2
                    },
                    "events": {
                        "available": 0,
                        "collectionURI": "http://gateway.marvel.com/v1/public/comics/60595/events",
                        "items": [],
                        "returned": 0
                    }
                }
            ]
        }

    }
;

class App extends Component {
    render() {
        const {thumbnail} = data.data.results[0];
        return (
            <div className="App">
                <p>{data.data.results[0].title}</p>
                <img className="comic-thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`} alt=""/>
            </div>
        );
    }
}

export default App;
