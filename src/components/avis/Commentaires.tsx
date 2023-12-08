import { useState } from "react";

interface Comment {
  id: number;
  author: string;
  text: string;
  completed: boolean;
}

export const Commentaires: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [inputAuthor, setInputAuthor] = useState<string>("");
  const [inputComment, setInputComment] = useState<string>("");

  const handleToggle = (id: number) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === id) {
          return { ...comment, completed: !comment.completed };
        }
        return comment;
      })
    );
  };

  const handlePostComment = () => {
    if (inputAuthor.trim() !== "" && inputComment.trim() !== "") {
      const newComment: Comment = {
        id: Date.now(),
        author: inputAuthor,
        text: inputComment,
        completed: false,
      };
      setComments([...comments, newComment]);
      setInputAuthor("");
      setInputComment("");
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=DM+Serif+Display&family=Lora:wght@500&family=Montserrat:wght@300&display=swap');
        `}
      </style>

      <div className="max-w-md mx-auto mt-8 px-4">
        <h1 className="text-3xl font-bold mb-4">Ajoutez un commentaire</h1>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Votre nom"
            className="border border-gray-300 px-3 py-2 rounded-md mb-2 w-full focus:outline-none"
            value={inputAuthor}
            onChange={(e) => setInputAuthor(e.currentTarget.value)}
          />
          <textarea
            placeholder="Écrire un commentaire"
            className="border border-gray-300 px-3 py-2 rounded-md mb-2 w-full h-24 resize-none focus:outline-none"
            value={inputComment}
            onChange={(e) => setInputComment(e.currentTarget.value)}
          />
          < button 
            onClick={handlePostComment}
            className="button-comment"
          >
            Poster
          </button>
        </div>

        <section className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Commentaires</h2>
          <div className="grid gap-4">
            {comments.map((comment) => (
              <div 
                key={comment.id}
                onClick={() => handleToggle(comment.id)}
              >
                <h3 className="text-xl font-bold mb-2">{comment.author}</h3>
                <p>{comment.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
