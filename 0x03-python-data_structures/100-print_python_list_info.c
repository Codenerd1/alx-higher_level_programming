#include <Python.h>
#include <stdio.h>

/**
 * print_python_list_info - function that prints basic info
 * 					about Python lists
 * @p: python list
 *
 */
void print_python_list_info(PyObject *p);
{
	Py_ssize_t size, i;
	PyObject *item;

	/* Check if p is a Python list */
	if (!PyList_Check(p))
	{
		printf(" [ERROR] Invalid Python list.\n");
		return;
	}

	/* Get the size of the list */
	size = PyList_Size(p);

	/* Print basic list information */
	printf("[*] Size of the Python List = %zd\n", size);

	/* Print detailed information about each element in the list */
	printf("[*] Allocated = %zd\n", ((PyListObject *)p)->allocated);
	for (i = 0; i < size; i++)
	{
		item = PyList_GetItem(p, i);
		printf("Element %zd: %s\n", i, PyTYPE(item)->tp_name);
	}
}
