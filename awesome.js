class Post {
	constructor(title,link,author,img,body){
		this.title = title;
		this.link = link;
		this.author = author;
		this.img = img;
		this.body = body;
	}
}

const app = new Vue({

	el: '#root',

	data: {

		keyword: '',

		postlist: [
		
		new Post(
				'Ludwig van Beethoven',
				'http://www.biography.com/people/ludwig-van-beethoven-9204862',
				'Biography.com',
				'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Beethoven.jpg/1200px-Beethoven.jpg',
				 'Composer Ludwig van Beethoven was baptized on December 17, 1770, in Bonn, Germany. He was an innovator, widening the scope of sonata, symphony, concerto and quartet, and combining vocals and instruments in a new way. His personal life was marked by a struggle against deafness, and some of his most important works were composed during the last 10 years of his life, when he was quite unable to hear. He died in 1827 at the age of 56.'
				),

			new Post(
				'Wolfgang Amadeus Mozart',
				'http://www.biography.com/people/wolfgang-mozart-9417115',
				'Biography.com',
				'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Wolfgang-amadeus-mozart_1.jpg/170px-Wolfgang-amadeus-mozart_1.jpg',
				'Born on January 27, 1756, in Salzburg, Austria, Wolfgang Amadeus Mozart was a musician capable of playing multiple instruments who started playing in public at the age of 6. Over the years, Mozart aligned himself with a variety of European venues and patrons, composing hundreds of works that included sonatas, symphonies, masses, chamber music, concertos and operas, marked by vivid emotion and sophisticated textures.'
				),

			new Post(
				'Franz Joseph Haydn',
				'http://www.biography.com/people/franz-joseph-haydn-9332156',
				'Biography.com',
				'https://upload.wikimedia.org/wikipedia/commons/0/05/Joseph_Haydn.jpg',
				'Franz Joseph Haydn was among the creators of the fundamental genres of classical music, and his influence upon later composers is immense. Haydn’s most celebrated pupil was Ludwig van Beethoven, and his musical form casts a huge shadow over the music of subsequent composers such as Schubert, Mendelssohn and Brahms.'
				),

			new Post(
				'Pyotr Ilyich Tchaikovsky',
				'http://www.biography.com/people/pyotr-ilyich-tchaikovsky-9503375',
				'Biography.com',
				'https://www.biography.com/.image/t_share/MTE5NTU2MzE2Mzg0OTUzODY3/piotr-ilyich-tchaikovsky-9503375-1-402.jpg',
				'Composer Pyotr Ilyich Tchaikovsky was born on May 7, 1840, in Vyatka, Russia. His work was first publicly performed in 1865. In 1868, his First Symphony was well-received. In 1874, he established himself with Piano Concerto No.1 in B-flat Minor. Tchaikovsky resigned from the Moscow Conservatory in 1878, and spent the rest of his career composing yet more prolifically. He died in St. Petersburg on November 6, 1893.'
				),

			new Post(
				'Philip Glass',
				'http://www.biography.com/people/philip-glass-9313058',
				'Biography.com',
				'http://images.nymag.com/arts/classicaldance/classical/reviews/philipglass120206_560.jpg',
				'Musician Philip Glass, born on January 31, 1937, in Baltimore, went on to study with Nadia Boulanger and Ravi Shankar, later forming the Philip Glass Ensemble. He received accolades for his debut opera, Einstein on the Beach, and eventually earned Oscar nominations for scoring the films Kundun, The Hours and Notes on a Scandal. Known for his distinctive contemporary minimalism, Glass has worked with artists from a variety of disciplines.'
				),
				
			new Post(
				'Johann Sebastian Bach',
				'http://www.biography.com/people/johann-sebastian-bach-9194289',
				'Biography.com',
				'http://cps-static.rovicorp.com/3/JPG_400/MI0003/738/MI0003738578.jpg?partner=allrovi.com',
				'Born on March 31, 1685 (N.S.), in Eisenach, Thuringia, Germany, Johann Sebastian Bach had a prestigious musical lineage and took on various organist positions during the early 18th century, creating famous compositions like "Toccata and Fugue in D minor." Some of his best-known compositions are the "Mass in B Minor," the "Brandenburg Concertos" and "The Well-Tempered Clavier." Bach died in Leipzig, Germany, on July 28, 1750. Today, he is considered one of the greatest Western composers of all time.'
				),
				
		]
	},
	computed: {
		filterlist(){
			return this.postlist.filter((post)=>{
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});
