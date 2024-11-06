import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';

export default function BlogPost({ title, date, content }) {
  return (
    <article className="max-w-2xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <time className="text-gray-500 mb-4 block">
        {format(new Date(date), 'MMMM dd, yyyy')}
      </time>
      <div className="prose prose-lg">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  );
}