import { useState } from 'react'
import PostComments from './PostComments'
import PostContent from './PostContent'
import postData from '../postData'

export default function DebatePost() {
  /* Challenge 

Form çalışmıyor. Göreviniz, kullanıcı "Gönder "e tıkladığında gönderiye bir yorum ekleyen kontrollü bir form yapmaktır.

    1. Yorum, yorum dizisinin alt kısmında, girilen kullanıcı adı ve yorum metni önceki yorumlar gibi görüntülenecek şekilde görünmelidir. 
       
    2. Yorum, önceki yorumların verilerini içeren array'e eklenmelidir. 
    
    3. Girilen kullanıcı adı kaydedilmeli, ancak kullanıcı onay kutusunu işaretlerse "AnonimKullanıcı" olarak görünmelidir.
    
    4. Kullanıcı formu göndermek için text input elemanına ve comment box elemanına metin girmek zorunda olmalı ve kullanıcı bir yorum gönderdikten sonra elemanlar ve onay kutusu temizlenmelidir. Sayfa yüklendiğinde de boş olmalıdırlar.   
        
    5. Kodunuz tamamen bu dosyanın içinde yer alabilir, ancak isterseniz bazı kısımları taşıyabilirsiniz. 

*/

  const [comments, setComments] = useState(postData.comments)
  const [newUser,setNewUser]=useState("")
  const [newPost,setNewPost]=useState("")
  const [anonim,setAnonim] = useState(false)


const handleSubmit =(e) =>{
e.preventDefault()
let newPerson = {id: crypto.randomUUID(),
userName:newUser,
userName: anonim ? 'AnonimKullanıcı' : newUser,
commentText:newPost}
setComments([...comments,newPerson])
setNewUser('');
setNewPost('');
setAnonim(false);
}

console.log(newUser)
console.log(newPost)


  return (
    <div className='post-container'>
      <PostContent data={{ ...postData }} />
      <PostComments data={comments} />
      <form onSubmit={handleSubmit}>
        <input
value={newUser}
onChange={(e)=>setNewUser(e.target.value)}
          className='text-input'
          type='text'
          placeholder='Kullanıcı adı girin.'
        />
        <textarea value={newPost} onChange={(e)=>setNewPost(e.target.value)} placeholder='Ne düşünüyorsunuz?' />
        <label>
          <input checked={anonim}  onChange={(e) => setAnonim(e.target.checked)} className='checkbox' type='checkbox' />
          İsimsiz mi göndereyim?
        </label>
        <button   type='submit'>Gönder</button>
      </form>
    </div>
  )
}
