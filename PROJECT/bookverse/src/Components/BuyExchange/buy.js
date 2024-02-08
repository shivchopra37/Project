import React from 'react'
import './buy.css'
import './bookcard.css'
import { Link } from 'react-router-dom'

const BookCard=()=>{
    return(
        <>
        <div className="book-card">
            <div className="book-image">
            <img
                src="/Images/book1.png"
                alt=""
                useMap="#image_map"
                style={{
                    width: '200px',
                    height:'200px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    // height:"30px",
                }}
              />
            </div>
            <div className="book-details">
                <h1>Book Name</h1>
                <p>Author</p>
                <p>Price</p>
                {/* <p>Condition</p> */}
            </div>
            <Link to="">View</Link>
        </div>
        </>
    )
}

const BuyExchange=()=> {

    const booklist=[
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "description": "Set in the summer of 1922, The Great Gatsby by F. Scott Fitzgerald revolves around the enigmatic Jay Gatsby and his infatuation with the alluring Daisy Buchanan. The story unfolds in the fictional towns of West Egg and East Egg on Long Island, depicting the opulent yet morally bankrupt lives of the wealthy elite during the Jazz Age. Gatsby's lavish parties serve as a facade to his deeply rooted desire to reclaim his lost love, Daisy, who is married to the affluent but morally corrupt Tom Buchanan. Through vivid imagery and intricate character dynamics, Fitzgerald explores themes of love, wealth, and the pursuit of the American Dream. The tragic narrative culminates in a poignant examination of the consequences of obsession and the fleeting nature of happiness.",
    "genre": "Fiction, Classic"
  },
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "description": "Harper Lee's To Kill a Mockingbird is a timeless coming-of-age novel set in the racially charged atmosphere of 1930s Alabama. Narrated by Scout Finch, the story follows her father, Atticus Finch, a principled lawyer tasked with defending a black man, Tom Robinson, accused of raping a white woman. Through Scout's innocent eyes, Lee masterfully explores themes of racial injustice, moral growth, and empathy. The novel paints a vivid portrait of Southern society, grappling with prejudice and societal norms. As Scout and her brother, Jem, navigate their childhood alongside their mysterious neighbor, Boo Radley, they confront the harsh realities of discrimination and the importance of compassion. To Kill a Mockingbird stands as a poignant reminder of the power of empathy and the enduring struggle for justice.",
    "genre": "Fiction, Classic, Coming-of-age"
  },
  {
    "title": "1984",
    "author": "George Orwell",
    "description": "George Orwell's 1984 is a chilling dystopian masterpiece set in a totalitarian society ruled by the omnipresent Party led by the enigmatic figure of Big Brother. Winston Smith, an ordinary citizen, rebels against the Party's oppressive regime by engaging in forbidden acts of independent thought and expression. As he embarks on a clandestine affair with Julia, he becomes increasingly disillusioned with the Party's manipulation and surveillance. Orwell's prophetic vision of a surveillance state, thought control, and historical revisionism remains eerily relevant in today's digital age. Through Winston's harrowing journey, Orwell explores themes of power, truth, and the erosion of individual freedom. 1984 serves as a stark warning against the dangers of totalitarianism and the importance of preserving liberty and truth in society.",
    "genre": "Fiction, Dystopian"
  },
  {
    "title": "The Hitchhiker's Guide to the Galaxy",
    "author": "Douglas Adams",
    "description": "The Hitchhiker's Guide to the Galaxy by Douglas Adams is a hilarious and inventive science fiction comedy that follows the misadventures of the hapless Earthman Arthur Dent. After his home planet is demolished to make way for a hyperspace bypass, Arthur embarks on a cosmic journey through space with his alien friend Ford Prefect, who turns out to be a researcher for the titular guidebook. Along the way, they encounter a motley crew of eccentric characters, including the two-headed, three-armed ex-President of the Galaxy, Zaphod Beeblebrox, and the depressed android Marvin. Infused with Adams' trademark wit and absurdity, the novel satirizes everything from bureaucracy to the meaning of life itself. As Arthur grapples with the absurdity of the universe, he learns valuable lessons about friendship, perspective, and the importance of carrying a towel.",
    "genre": "Fiction, Science Fiction, Comedy"
  },
  {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "description": "Jane Austen's Pride and Prejudice is a timeless romance novel set in early 19th-century England, revolving around the spirited Elizabeth Bennet and the aloof yet enigmatic Mr. Darcy. As Elizabeth navigates the intricate social hierarchy of Georgian society, she finds herself entangled in a web of familial expectations, societal pressures, and misunderstandings. Darcy, initially perceived as arrogant and haughty, undergoes a transformation as he grapples with his feelings for Elizabeth and confronts his own prejudices. Austen's sharp wit and keen observation of human nature shine through in this tale of love, class, and societal norms. Through the spirited banter and romantic entanglements of its characters, Pride and Prejudice explores themes of pride, prejudice, and the transformative power of love.",
    "genre": "Fiction, Romance, Classic"
  },
  {
    "title": "Harry Potter and the Sorcerer's Stone",
    "author": "J.K. Rowling",
    "description": "J.K. Rowling's Harry Potter and the Sorcerer's Stone introduces readers to the magical world of Hogwarts School of Witchcraft and Wizardry and the young wizard Harry Potter. Orphaned as a baby and raised by his cruel relatives, Harry discovers on his eleventh birthday that he is a wizard and has been accepted into Hogwarts. Alongside his newfound friends Ron Weasley and Hermione Granger, Harry embarks on a series of adventures as he learns about his past and confronts the dark wizard Voldemort, who seeks to destroy him. Rowling's richly imagined universe is populated by colorful characters and fantastical creatures, creating a captivating and immersive reading experience. Through themes of friendship, bravery, and the battle between good and evil, Harry Potter and the Sorcerer's Stone enchants readers of all ages and inspires a love of magic and imagination.",
    "genre": "Fiction, Fantasy, Young Adult"
  },
  {
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "description": "J.D. Salinger's The Catcher in the Rye is a timeless coming-of-age novel that follows the disillusioned teenager Holden Caulfield as he navigates the streets of New York City after being expelled from boarding school. Told in the form of a confessional narrative, the novel captures Holden's inner turmoil, alienation, and disdain for the superficiality of adult society. As he grapples with themes of identity, innocence, and authenticity, Holden embarks on a journey of self-discovery, encountering a cast of eccentric characters along the way. Through Holden's introspective voice and candid observations, Salinger offers a poignant exploration of adolescence and the search for meaning in a world filled with phoniness and hypocrisy. The Catcher in the Rye continues to resonate with readers of all generations, capturing the universal struggle of growing up and finding one's place in the world.",
    "genre": "Fiction, Coming-of-age, Classic"
  },
  {
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "description": "J.R.R. Tolkien's The Lord of the Rings is a sweeping epic fantasy trilogy set in"
  }]
  return (
    <>
        <div className="book-container">
           <div className="headingbook">
                <h1>Select your Book </h1>
           </div>
           <div className="bookcard-container">
                <BookCard />
           </div>
        </div>
    </>
  )
}

export default BuyExchange