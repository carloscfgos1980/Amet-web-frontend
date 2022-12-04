## Setup app for React-Redux

## STEPS:

1.  In the terminal:
    npx create-react-app todo-app
    npm install redux react-redux
    npm install @reduxjs/toolkit
    npx json-server --watch data/db.json --port 8000 //Create a fake rest API. check note bellow.  
    npm install react-router-dom@6 //to create links. This needed update
    npm install recharts //To implement charts
    npm install react-bootstrap bootstrap
    npm install react-bootstrap-icons --save

## Leyend:

- PaintingCarousel.js - It is the shop
- Painting.js - It is the selected painting to watch the details.

# Shopping cart process:

ShowShoppingCart => ContactsClients.js (inputfield) => CheckData.js (it contains ClientTable.js) => Success.js
\*Check ClientTable.js how to display dynamically data on a table!

## 1. Use params

- This is very important so I can click on an item and it takes me to the details of that item (painting)

# Steps

1.  src/App.js:

            </Route>
            <Route path="/art/:title">
              <Paintings />

2.  src/components/PaintingsCarousel.js:

                                     <Link to={`/art/${painting.title}`}> // Here is where the desireable item is selected by the title
                                        <img
                                            width='40%'
                                            src={painting.img}
                                            alt='slide'
                                        />
                                    </Link>

3.  src/components/Painting.js:
    const dispatch = useDispatch(); //lin 13
    const { title } = useParams(); //line 14

                {paintingsData.filter(painting => painting.title === title)
                    .map(painting => {
                      }
                      )}

- Looping thro the array of painting to select only the paint we clicked to be shown in the DOM
  N: When I" used useParams. I couldn't import the image from public file so I had to use the follwing method and make a copy of the image folder into src folder, the method that I used was this one:
  <img src={require(`${imagen}`)}
