export default function ToggleBtn() {
    return (
        <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-11 h-6 bg-light-background dark:bg-dark-background outline outline-2
                             peer-focus:ring-light-accent dark:peer-focus:ring-dark-accent 
                            rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white 
                            after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-light-background after:border-light-accent after:border 
                            after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-dark-accent">
                </div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
        </label>
    )
}