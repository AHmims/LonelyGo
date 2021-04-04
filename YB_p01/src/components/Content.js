import React, { useContext } from 'react';
import { NotesContext } from '../NotesContext';
import { NoteCard } from './NoteCard';

export const Content = () => {
    const manager = useContext(NotesContext);

    return (
        <div className="flex-1 bg-white flex flex-col overflow-hidden">
            <div className="py-7.5 px-10 w-full h-auto bg-white">
                <div className="flex items-center space-x-1.5">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.17242 5.94904C8.11156 5.94904 7.09414 6.37047 6.344 7.12061C5.59385 7.87076 5.17242 8.88817 5.17242 9.94904C5.17242 11.0099 5.59385 12.0273 6.344 12.7775C7.09414 13.5276 8.11156 13.949 9.17242 13.949C10.2333 13.949 11.2507 13.5276 12.0009 12.7775C12.751 12.0273 13.1724 11.0099 13.1724 9.94904C13.1724 8.88817 12.751 7.87076 12.0009 7.12061C11.2507 6.37047 10.2333 5.94904 9.17242 5.94904ZM3.17242 9.94904C3.1723 9.00474 3.39507 8.07375 3.8226 7.23178C4.25012 6.38981 4.87035 5.66064 5.63282 5.10356C6.39529 4.54649 7.27849 4.17725 8.21057 4.02587C9.14265 3.87449 10.0973 3.94525 10.9969 4.23239C11.8965 4.51953 12.7156 5.01494 13.3876 5.67833C14.0596 6.34173 14.5656 7.15437 14.8643 8.05017C15.163 8.94597 15.2461 9.89963 15.1067 10.8336C14.9674 11.7675 14.6096 12.6554 14.0624 13.425L16.3448 15.3973C16.527 15.5859 16.6278 15.8385 16.6255 16.1007C16.6232 16.3629 16.518 16.6137 16.3326 16.7991C16.1472 16.9845 15.8964 17.0897 15.6342 17.092C15.372 17.0943 15.1194 16.9935 14.9308 16.8113L12.6494 14.84C11.7518 15.4783 10.6958 15.8572 9.5971 15.9352C8.49843 16.0131 7.3995 15.7871 6.42072 15.282C5.44195 14.7769 4.62111 14.0121 4.04815 13.0714C3.47518 12.1307 3.17221 11.0505 3.17242 9.94904Z" fill="#9CA3AF" />
                    </svg>
                    <input type="text" placeholder="Search" className="font-PlusJakarta text-coolGray-400 text-lg" />
                </div>
                <h1 className="font-PlusJakarta font-bold text-5xl text-blueGray-900 mt-10">Notes</h1>
            </div>
            <div className="mt-10 flex-1 bg-white grid grid-cols-cardsMobile md:grid-cols-cards grid-rows-cards gap-6 p-6 md:gap-10 md:px-10 md:py-0 overflow-y-auto">
                {
                    [...manager.notes].reverse().map((note, i) => <NoteCard key={note.color + i} color={note.color} text={note.text} />)
                }
            </div>
        </div>
    );
}