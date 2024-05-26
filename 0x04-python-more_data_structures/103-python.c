#include <python.h>


void print_python_list(PyObject *p) {
	// Check if p is a valid Python list object
	if (!PyList_Check(p)) {
		fprintf(stderr, "Error: p is not a valid PyListObject\n");
		return;
	}

	// Get the size of the list
	py_ssize_t size = PyList_Size(p);

	// Get the allocated size of the list (internal size)
	Py_ssize_t allocated = ((PyListObject *)p)->allocated;
	
	
	printf("[*] Python list info\n");
	printf("[*] Size of the Python List = %zd\n", size);
	printf("[*] Allocated = %zd\n", allocated);
	
	
	// Iterate over the list and print the type of each element
	for (Py_ssize_t i = 0; i < size; i++) {
		PyObject *item = PyList_GetItem(p, i);
		const char *type_name = item->ob_type->tp_name;
		printf("Element %zd: %s\n", i, type_name);
	}
}


void print_python_bytes(PyObject  *p) {
	// Check if p is a valid Python bytes object
	if (!PyBytes_Check(p)) {
		fprintf(stderr, "Error: p is not a valid PyBytesObject\n");
		return;
	}
	
	
	// Get the size of the bytes object
	Py_ssize_t size = PyBytes_size(p);
	
	
	// Get the bytes as a C string
	char *bytes_str = PyBytes_AsString(p);
	
	printf("[.] bytes object info\n");
	printf(" size: %zd\n", size);
	printf(" trying string: %s\n", bytes_str);
	
	
	// Print the first x bytes (up to 10 bytes)
	printf(" first %zd bytes: ", (size < 10) ? size + 1 : 10);
	for (Py_ssize_t i = 0; i < size && i < 10; i++) {
		printf("%02x ", (unsigned char)bytes_str[i]);
	}
	printf("\n");
}_
